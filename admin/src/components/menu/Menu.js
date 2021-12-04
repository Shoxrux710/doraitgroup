import React from 'react'
import { FaHome, FaUser } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import {logOut, homePages} from '../../redux/action/userAction'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axiosInterceptors from '../../utils/axiosInterceptors';
import './menu.css'

const Menu = () => {

    const dispatch = useDispatch();

    const logoutAdmin = () => {
        const userData = JSON.parse(window.localStorage.getItem('auth'));
        const rToken = userData ? userData.rToken : null;
        axiosInterceptors.delete(`/api/user/logout?refreshToken=${rToken}`)
            .then((response) => {
                dispatch(logOut());
            })
            .catch((err) => {
                console.log(err.response);
            })
    }


    return (
        <div className="menu">
            <div className="position">
                <h2>Dora IT group</h2>
                <ul>
                    <li onClick={() => dispatch(homePages('Home'))} ><NavLink exact className="items" to="/admin/home"><FaHome className="fa" /> Home</NavLink></li>
                    <li onClick={() => dispatch(homePages('News'))} ><NavLink className="items" to="/admin/news"><BsGlobe className="fa" /> News</NavLink></li>
                    <li onClick={() => dispatch(homePages('Portfolio'))}><NavLink className="items" to="/admin/portfolio"><AiFillFolderOpen className="fa" /> Portfolio</NavLink></li>
                    <li onClick={() => dispatch(homePages('Account'))}><NavLink className="items" to="/admin/account"><FaUser className="fa" /> Account</NavLink></li>
                    <li style={{ marginBottom: "130px" }} onClick={() => dispatch(homePages('Blog'))}><NavLink className="items" to="/admin/blog"><CgFileDocument className="fa" /> Blog</NavLink></li>
                    <li
                    onClick={logoutAdmin}
                    className="items"
                    ><ImExit className="fa" /> Exit</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
