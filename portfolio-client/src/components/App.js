import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './Home'
import About from './About'
import ContactForm from './ContactForm'
import ProjectsContainer from './projects/ProjectsContainer'
import AdminContainer from './admin/AdminContainer'
import AdminNav from './admin/AdminNav'
import Login from './admin/Login'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects </NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>

          <AdminNav /> <br />
      
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={ContactForm} />
          <Route path='/projects' component={ProjectsContainer} />
          <Route path='/admin' component={AdminContainer} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
