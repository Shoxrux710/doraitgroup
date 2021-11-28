import React, { useState, useEffect } from 'react'
import axios from '../../utils/axiosInterceptors'
import {inNews, inPort, inUsers, inBlogs} from '../../redux/action/userAction'
import {useDispatch} from 'react-redux'
import Home from './Home'

const HomeAll = () => {

    const dispatch = useDispatch()
    const [news, setNews] = useState([])
    const [newCount, setNewCount] = useState(0)
    const [portCount, setPortCount] = useState(0)
    const [userCount, setUserCount] = useState(0)
    const [blogCount, setBlogCount] = useState(0)
    const [userHome, setUserHome] = useState([])
    const [portHome, setPortHome] = useState([])
    const [blogHome, setBlogHome] = useState([])
    const [newloading, setNewloading] = useState(true)
    const [blogloading, setBlogloading] = useState(true)
    const [accountloading, setAccountloading] = useState(true)
    const [portloading, setPortloading] = useState(true)

    const newProduct = () => {
      setNewloading(true)
        axios.get(`/api/news/all`)
          .then(response => {
            setNewloading(false)
            setNews(response.data.newSort) 
            setNewCount(response.data.newsCount)
            dispatch(inNews(response.data.newsCount))
          })
    }


    const accountHome = () => {
      setAccountloading(true)
        axios.get(`/api/client/all`)
          .then(response => {
            setAccountloading(false)
            setUserHome(response.data.userSort) 
            setUserCount(response.data.userCount)
            dispatch(inUsers(response.data.userCount))
          })
    }

    const portfolioHome = () => {
      setPortloading(true)
        axios.get(`/api/port/all`)
          .then(response => {
            setPortloading(false)
            setPortHome(response.data.portSort) 
            setPortCount(response.data.userCount)
            dispatch(inPort(response.data.userCount))
          })
    }

    const blogsHome = () => {
      setBlogloading(true)
      axios.get('/api/blog/all')
            .then(response => {
              setBlogloading(false)
              setBlogHome(response.data.blogSort)
              setBlogCount(response.data.blogCount)
              dispatch(inBlogs(response.data.blogCount))
            })
    }

    useEffect(() => {
        newProduct()
        accountHome()
        portfolioHome()
        blogsHome()
    }, [])

    return (
        <div>
            <Home
            news={news}
            userHome={userHome}
            portHome={portHome}
            newCount={newCount}
            portCount={portCount}
            userCount={userCount}
            blogHome={blogHome}
            blogCount={blogCount}
            newloading={newloading}
            blogloading={blogloading}
            accountloading={accountloading}
            portloading={portloading}
            />
        </div>
    )
}

export default HomeAll
