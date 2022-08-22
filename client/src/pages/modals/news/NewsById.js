import React, { useEffect, useState } from 'react'
import './newsById.css'
import sana from '../../../img/date.png'
import eye from '../../../img/eye.png'
import axios from 'axios'
import Loading from '../../../loader/Loading'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NewsById = (props) => {

    const [newsById, setNewsById] = useState({})
    const [newsId, setNewsId] = useState([])
    const [view, setView] = useState(0)
    const [loader, setLoader] = useState(true)
    const {lang} = useSelector(state => state.userLogin)

    let links = window.location.pathname ? "http://localhost:4008" : ''

    const viewNews = (id) => {
        axios.put(`/api/news/view/${id}`)
              .then(response => {
                setView(response.data.view)
              })
    }

    const getNewsById = (id) => {
        axios.get(`/api/news/all/${id}`)
            .then(response => {
                setNewsById(response.data.newsOne)
                setLoader(false)
            })
    }

    const getNewsOne = () => {
        axios.get(`/api/news/random`)
            .then(response => {
                setNewsId(response.data.news)
                setLoader(false)
            })
    }



    const loadingA = loader ? <Loading /> : null

    useEffect(() => {
        getNewsById(props.match.params.id);
        viewNews(props.match.params.id)
        getNewsOne()
    }, [props.match.params.id])

    const title = newsById.title ? newsById.title[lang] : ''
    const description = newsById.description ? newsById.description[lang] : ''
    const images = newsById.imageNews ? newsById.imageNews.fileName : ''

    return (
        <div className='news-by-id'>
            {loadingA}
            <div className='left'>
                <div className='bg' style={{ backgroundImage: `url(${links}/images/news/${images})` }}></div>
                <p style={{display: 'flex'}}> <img src={eye} alt='vector' style={{marginRight: '5px'}} /> {view}</p>
                <h5>{title}</h5>
                <p>{description}</p>
               
            </div>
            <div className='right'>
                <h3>Boshqalar</h3>
                {
                    newsId.map((items) => {

                        let descriptionContinue = '';
                        let continueText = '';

                        for (let i = 0; i < items.description[lang].length; i++) {
                            if (i < 30) {
                                descriptionContinue += items.description[lang][i];
                            } else {
                                continueText = '...';
                                break;
                            }
                        }

                        return (
                            <div className='wrapper' key={items._id}>
                                <Link to={`/then/news/${items._id}`} style={{textDecoration: 'none'}}>
                                <div className='qator'>
                                    <div className='left-img' style={{ backgroundImage: `url(${links}/images/news/${items.imageNews.fileName})` }}></div>
                                    <div className='right-data'>
                                        <div className='date'>
                                            <div className='left-side'>
                                                <img src={sana} alt='sana' />
                                                <span>{items.date.substring(0, 10)}</span>
                                            </div>
                                            <div className='right-side'>
                                                <img src={eye} alt='vector' />
                                                <span>{items.view}</span>
                                            </div>
                                        </div>
                                        <div className='text'>
                                            <p>{descriptionContinue}{continueText}</p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsById
