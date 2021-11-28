import React, {useState, useEffect} from 'react'
import './portfolio.css'
import uchburchak from '../../../img/uchburchak.png'
import axios from 'axios'
import Loading from '../../../loader/Loading'

const Portfolio = () => {

    const [portClient, setPortClient] = useState([])
    const [loading, setLoading] = useState(true)

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
                            <a href="/" className="portfolio" key={index}>
                                <div className='image-wrap' style={{backgroundImage: `url(http://localhost:3000/portfolio/${items.imagePort.fileName})`}}></div>
                                <div className='text-wrapper'>
                                    <h3>{items.title.uz}</h3>
                                    <p>{items.description.uz}</p>
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
