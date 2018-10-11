import React, { Component } from 'react';
import Projects from './containers/Projects'  

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {

  constructor() {
    super()

    this.state= {
      projects: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/projects`)
      .then(response => response.json())
      .then(projects => this.setState({ projects, loading: false }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.loading ? 
          <h1>Loading...</h1> :
          <Projects projects={this.state.projects} />
        }
      </div>
    );
  }
}

export default App;
