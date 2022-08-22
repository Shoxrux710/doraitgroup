import React, {useState, useEffect} from 'react'
import './portfolio.css'
import uchburchak from '../../../img/uchburchak.png'
import axios from 'axios'
import Loading from '../../../loader/Loading'
import { useSelector } from 'react-redux'


const Portfolio = () => {

    const [portClient, setPortClient] = useState([])
    const [loading, setLoading] = useState(true)
    const {lang} = useSelector(state => state.userLogin)

    let links = window.location.pathname ? "http://localhost:4008" : ''

    useEffect(() => {
        setLoading(true)
        axios.get('/api/port/all')
              .then(response => {
                setPortClient(response.data.user)
                setLoading(false)
              })  
    }, [])

    return (
        <div className='portfolio-modal'>
            <div className='top'>
                <div>
                    <img src={uchburchak} alt='uchburchak' />
                    <span>Portfolio</span>
                </div>
                <div className='line'></div>
            </div>
            <div className='portfolio-wrapper'>
                {
                    loading ? <Loading /> : 
                    portClient.map((items, index) => {
                        return (
                            <a href={`http://${items.link}`} target="_blank" rel="noreferrer" className="portfolio" key={index}>
                                <div className='image-wrap' style={{backgroundImage: `url(${links}/images/portfolio/${items.imagePort.fileName})`}}></div>
                                <div className='text-wrapper'>
                                    <h3>{items.title[lang]}</h3>
                                    <p>{items.description[lang]}</p>
                                </div>
                            </a>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Portfolio
