import React, { useEffect, useState } from 'react'
import './news.css'
import uchburchak from '../../../img/uchburchak.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../../loader/Loading'
import { useSelector } from 'react-redux'
// import { useTranslation } from 'react-i18next'

const News = () => {

    let links = window.location.pathname ? "http://localhost:4008" : ''

    // const { t } = useTranslation()
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const {lang} = useSelector(state => state.userLogin)

    const getNews = () => {
        axios.get(`/api/news/all`)
        .then(response => {
            setData(response.data.news)
            setLoader(false)
        })
    }

    const loadingA = loader ? <Loading /> : null

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className='news-modal'>
            <div className='top'>
                <div>
                    <img src={uchburchak} alt='uchburchak' />
                    <span>News</span>
                </div>
                <div className='line'></div>
            </div>
            <div className='news-wrapper'>
                {loadingA}
                {
                    data.map((item, index) => {

                        let description = '';
                        let continueText = '';

                        for ( let i = 0; i <= item.description[lang].length; i++) {
                            if(i < 70) {
                                description += item.description[lang][i]
                            }
                            else {
                                continueText = '...';
                                break;
                            }
                        }


                        return (
                            <Link to={`/then/news/${item._id}`} className='square' key={index}>
                                <div className='bg-img' style={{backgroundImage: `url(${links}/images/news/${item.imageNews.fileName})`}}></div>
                                <h2>{item.title[lang]}</h2>
                                <p>{description}{continueText}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News
