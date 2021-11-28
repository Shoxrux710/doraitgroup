import React from 'react'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Password from './components/password/Password'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


const App = () => {

  const { auth } = useSelector(state => state.userLogin)

  const authRoutes = (
    <>
      <Menu />
      <Header />
    </>
  )

  const loginRoutes = (
    <Switch>
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/reset" component={Password} />
      <Redirect to="/admin/login" />
    </Switch>
  )

  const routes = auth ? authRoutes : loginRoutes

  return (
    <div className="app">
      <ToastContainer />
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App
