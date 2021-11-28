import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Future from './future-pages/home/Future'
import Home from './pages/home/Home'
import Kirish from './pages/kirish/Kirish'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  return (
    <div>
       <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <Kirish />
            </Route>
          <Route path='/then'>
            <Home />
          </Route>
          <Route path='/future'>
            <Future />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
