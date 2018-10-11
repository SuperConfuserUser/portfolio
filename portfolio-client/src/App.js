import React, { Component } from 'react';
import ProjectsContainer from './containers/ProjectsContainer'  
class App extends Component {

  constructor() {
    super()

    this.state= {
      projects: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`/api/projects/`)
      .then(response => response.json())
      .then(projects => this.setState({ projects, loading: false }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.loading ? 
          <h1>Loading...</h1> :
          <ProjectsContainer projects={this.state.projects} />
        }
      </div>
    );
  }
}

export default App;
