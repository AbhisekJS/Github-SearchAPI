import React from 'react'
import Navbar from './components/Layout/Navbar'
import User from './components/users/User'
import Alert from './components/Layout/Alert'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/Alert/AlertState'
import './App.css'

function App() {
  

  

  //set alert
  
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar/> 
        <div className="container">
          <Alert/>
          <Switch>
            <Route 
            exact 
            path='/' 
            component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' component={User}/>
          </Switch>  
          
          
        </div>       
      </div>
      </Router>
      </AlertState>
      </GithubState>
    )
  
}

export default App