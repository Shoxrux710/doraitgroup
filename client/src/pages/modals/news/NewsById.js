import React, { useEffect, useState } from 'react'
import './newsById.css'
import sana from '../../../img/date.png'
import eye from '../../../img/eye.png'
import axios from 'axios'
import Loading from '../../../loader/Loading'

const NewsById = (props) => {

    const [newsById, setNewsById] = useState({})
    const [loader, setLoader] = useState(true)

    const getNewsById = (id) => {
        axios.get(`https://fakestoreapi.com/products/${id}/`)
        .then(res => {
            setNewsById(res.data)
            setLoader(false)
        })
    }

    console.log(newsById)

    const loadingA = loader ? <Loading /> : null

    useEffect(() => {
        const { id } = props.match.params;
        getNewsById(id);
    },[])

    return (
        <div className='news-by-id'>
            {loadingA}
            <div className='left'>
                <div className='bg'></div>
                <h5>Title</h5>
                <p>description</p>
            </div>
            <div className='right'>
                <h3>Boshqalar</h3>
                <div className='wrapper'>
                    <div className='qator'>
                        <div className='left-img'></div>
                        <div className='right-data'>
                            <div className='date'>
                                <div className='left-side'>
                                    <img src={sana} alt='sana' />
                                    <span>11 sentabr 10:15</span>
                                </div>
                                |
                                <div className='right-side'>
                                    <img src={eye} alt='vector' />
                                    <span>1000</span>
                                </div>
                            </div>
                            <div className='text'>
                                <p>BUGUN it sohasi boyicha judda katta yangiliklar bolyapti uzoq muddAT DAVOM ETGAN ADMIN PANEL YAKUNIGA YETDI va unga tikilgan...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsById
