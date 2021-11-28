import React, {useState} from 'react'
import Items from './Items'
import {Link} from 'react-router-dom'
import './blog.css'

const Blog = (props) => {

    const { account, blogsId, id, blogCount } = props;

    const [search, setSearch] = useState("")

    return (
        <div className="blog">
            <div className="blog_search">
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                {
                    account.filter(val => {
                        if (search === ""){
                            return val
                        }else if (val.users.login.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }).map((item, index) => {
                        return (
                            <ul key={index}>
                                <li> <Link to={`/admin/blog/${item.users._id}`}>{item.users.login} </Link></li>
                            </ul>
                        )
                    })
                }
            </div>
            <Items blogsId={blogsId} id={id} blogCount={blogCount}/>
        </div>
    )
}

export default Blog
