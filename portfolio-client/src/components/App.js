import React, { Component } from 'react';
import ProjectsContainer from './projects/ProjectsContainer'  
class App extends Component {

  constructor() {
    super()

    this.state= {
      projects: [],
      loading: false
    }
  }

  componentDidMount() {
    // fetch(`/api/projects/`)
    //   .then(response => response.json())
    //   .then(projects => this.setState({ projects, loading: false }))
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? 
          <h1>Loading...</h1> :
          <ProjectsContainer />
        }
      </div>
    );
  }
}

export default App;
