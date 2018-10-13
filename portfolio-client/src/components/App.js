import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ProjectsContainer from './projects/ProjectsContainer'

const Home = () => (
  <div>
    <h1>Howdy!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Massa massa ultricies mi quis. Dolor sit amet consectetur adipiscing elit duis tristique. </p>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
    <img src="https://pics.me.me/iare-programmer-i-make-computer-beep-boop-beep-beep-boop-30422574.png" alt="programmer cat" />
    <p>Quis varius quam quisque id diam vel. Ullamcorper sit amet risus nullam eget. Faucibus ornare suspendisse sed nisi lacus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Etiam non quam lacus suspendisse. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Facilisis magna etiam tempor orci eu lobortis elementum. Molestie a iaculis at erat pellentesque adipiscing.</p>
  </div>
)

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectsContainer} />
        </div>
      </Router>
    )
  }
  
}

export default App;
