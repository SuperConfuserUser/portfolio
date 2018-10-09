import React, { Component } from 'react';
import Projects from './containers/Projects'  

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {

  constructor() {
    super()

    this.state= {
      projects: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/projects`)
      .then(response => response.json())
      .then(projects => this.setState({ projects }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
