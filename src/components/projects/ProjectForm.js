import React, { Component } from 'react'

export class ProjectForm extends Component {


  render() {
    return (
      <div>
        <h2>Add New Project</h2>
        <form>
          <label>Name</label><br />
          <input type="text" name="name" /><br />
          <label>Image URL</label><br />
          <input type="text" name="img_url" /><br />
          <label>Description</label><br />
          <textarea name="description" /><br />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default ProjectForm
