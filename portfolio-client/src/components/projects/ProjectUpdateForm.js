import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { updateProjectFormData, resetProjectForm, getProjectFormData } from '../../actions/projectFormActions'
import { updateProject } from '../../actions/projectsActions'

class ProjectUpdateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.props.resetProjectForm()
  }

  componentDidMount() {
    const { getProjectFormData, match } = this.props
    getProjectFormData(match.params.projectId)
  }

  handleChange = event => {
    const { name, value } = event.target
    const { updateProjectFormData } = this.props
    const currentProject = { ...this.props.projectFormData,  [name]: value }

    updateProjectFormData(currentProject)
  }

  handleSubmit = event => {
    const { updateProject, projectFormData } = this.props

    event.preventDefault()
    updateProject(projectFormData)
      .then(project => this.setState({ 
        redirectUrl: `/projects/${project.id}` 
      }))
  }

  render() {
    
    if(this.state.redirectUrl) {
      return <Redirect push to={this.state.redirectUrl} />
    }

    const { name, img_url, description } = this.props.projectFormData

    return (
      <div>
        <h3>Update Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image URL</label>
            <input 
              type="text" 
              name="img_url"
              onChange={this.handleChange}
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description"
              onChange={this.handleChange}
              value={description}
            />
          </div>
          <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ projectFormData }) => ({ projectFormData })

export default connect(mapStateToProps, { 
  updateProjectFormData,
  resetProjectForm,
  updateProject,
  getProjectFormData 
})(ProjectUpdateForm)
