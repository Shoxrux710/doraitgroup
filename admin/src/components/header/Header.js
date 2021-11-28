import React from 'react'
import Navbar from '../navbar/Navbar'
import Inform from '../inform/Inform'
import NewAll from '../news/NewAll'
import BlogAll from '../blog/BlogAll'
import AccountAll from '../account/AccountAll'
import HomeAll from '../home/HomeAll'
import PortfolioAll from '../portfolio/PortfolioAll'
import Register from '../register/Register'
import { Switch, Route, Redirect } from 'react-router-dom'
import './header.css'

const Headers = () => {
    return (
        <div className="header">
            <Navbar />
            <Inform />
            <div className="header_home">
                <Switch>
                    <Route path="/admin/home" exact component={HomeAll} />
                    <Route path="/admin/blog/:id?" component={BlogAll} />
                    <Route path="/admin/account" component={AccountAll} />
                    <Route path="/admin/register" component={Register} />
                    <Route path="/admin/portfolio/:id?" component={PortfolioAll} />
                    <Route path="/admin/news/:id?" component={NewAll} />
                    <Redirect to="/admin/home" />
                </Switch>
            </div>
        </div>
    )
}

export default Headers
