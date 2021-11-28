import React, { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
import axios from '../../utils/axiosInterceptors'
import Blog from './Blog'

const AccountAll = (props) => {

    
    const [count, setCount] = useState(0)
    const [blogCount, setBlogCount] = useState(0)
    const [account, setAccount] = useState([])
    const [blogsId, setBlogsId] = useState([])



    const accountBlog = () => {
        axios.get(`/api/client/all?skip=0&limit=0`)
            .then(response => {
                setAccount(response.data.users);
                setCount(response.data.userCount)
            })  
    }

    const blogId = (id) => {
        if (id) {
            axios.get(`/api/blog/filter/${id}`)
            .then(response => {
                setBlogsId(response.data.blogAll);
                setBlogCount(response.data.blogCounts)
            })
        }  
    }


    useEffect(() => {
        accountBlog()
    }, [])

    useEffect(() => {
        blogId(props.match.params.id)
    }, [props.match.params.id])

    return (
        <div>
            <Blog
            count={count}
            account={account}
            blogsId={blogsId}
            blogCount={blogCount}
            id={props.match.params.id}
            />
        </div>
    )
}

export default AccountAll
