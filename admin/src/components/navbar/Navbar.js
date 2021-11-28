import React, {useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { Menu, Dropdown } from 'antd';
import {useSelector} from 'react-redux'
import axios from '../../utils/axiosInterceptors';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

    const [propsId, setPropsId] = useState('')
    const {role, page} = useSelector(state => state.userLogin)

    const getId = () => {
        axios.get('/api/user/data')
              .then(response => {
                setPropsId(response.data.login)
              })  
    }

    useEffect(() => {
        getId()
    }, [])

    const menu = (
            role === 'super-admin' ? (
                <Menu>
                <Menu.Item key="3">
                    <Link
                        className="menu_item"
                        to="/admin/register">register</Link>
                </Menu.Item>
            </Menu>
            ) : ''
    );

    return (
        <div className="nav">
            <h3>Pages / <span>{page ? page : 'Home'}</span></h3>
            <div className="form">
                <div className="search">
                    <BiSearch />  <input type="text" required placeholder="Type here..." />
                </div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Link to="#"
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}>
                       <FaUser className="fa" /> {propsId} 
                    </Link>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navbar
