import React, { Component } from 'react';
import Projects from './containers/Projects'  

class App extends Component {

  constructor() {
    super()

    this.state= {
      projects: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/projects')
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
