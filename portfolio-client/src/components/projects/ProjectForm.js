import React, { Component } from 'react'

export class ProjectForm extends Component {

  state = {
    name: '',
    img_url: '',
    description: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({
      name: '',
      img_url: '',
      description: ''
    })
    console.log(this.state)
  }

  render() {
    const { name, img_url, description } = this.state

    return (
      <div>
        <h2>Add New Project</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              onChange={this.handleOnChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image URL</label>
            <input 
              type="text" 
              name="img_url"
              onChange={this.handleOnChange}
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description"
              onChange={this.handleOnChange}
              value={description}
            />
          </div>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default ProjectForm
