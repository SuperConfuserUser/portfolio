import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './Home'
import About from './About'
import ProjectsContainer from './projects/ProjectsContainer'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects </NavLink>
          <NavLink to='/about'>About</NavLink>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={ProjectsContainer} />
        </div>
      </Router>
    )
  }
  
}

export default App;
