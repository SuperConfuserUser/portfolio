import React, { Component } from 'react';

import Projects from './containers/Projects'  

const projects = [
  {
    name: "Very First Project",
    description: "Hello World!",
    img_url: "https://media.giphy.com/media/2xPPojqe3mraUXS6dk/giphy.gif"
  },
  {
    name: "MyFace",
    description: "The next big social media platform.",
    img_url: "https://media.giphy.com/media/14cilFdQzr8hG0/giphy.gif"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects projects={projects} />
      </div>
    );
  }
}

export default App;
