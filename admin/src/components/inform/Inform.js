import React from 'react'
import { FaUser } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import {useSelector} from 'react-redux'
import './inform.css'

const Inform = () => {

    const {lengthPort, lengthNews, lengthUser, lengthBlog} = useSelector(state => state.userLogin)

    return (
        <div className="inform">
            <div className="inform_items">
                <div className="name">
                    <h3>News</h3>
                    <p>{lengthNews}</p>
                </div>
                <BsGlobe className="fa" />
            </div>
            <div className="inform_items">
                <div className="name">
                    <h3>Portfolio</h3>
                    <p>{lengthPort}</p>
                </div>
                <AiFillFolderOpen className="fa" />
            </div>
            <div className="inform_items">
                <div className="name">
                    <h3>Blog</h3>
                    <p>{lengthBlog}</p>
                </div>
                <CgFileDocument className="fa" />
            </div>
            <div className="inform_items">
                <div className="name">
                    <h3>Account</h3>
                    <p>{lengthUser}</p>
                </div>
                <FaUser className="fa" />
            </div>
        </div>
    )
}

export default Inform
