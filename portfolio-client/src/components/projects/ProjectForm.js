import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProjectFormData, resetProjectForm } from '../../actions/projectFormActions'
import { createProject } from '../../actions/projectsActions'

class ProjectForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectUrl: ''
    }
  }

  componentWillUnmount() {
    this.props.resetProjectForm()
  }

  handleChange = event => {
    const { id, value } = event.target
    const { updateProjectFormData } = this.props
    const currentProject = { ...this.props.projectFormData,  [id]: value }

    updateProjectFormData(currentProject)
  }

  handleSubmit = event => {
    const { createProject, projectFormData } = this.props

    event.preventDefault()
    createProject(projectFormData)
      .then(projectId => {
        if(projectId) {
          this.setState({ 
            redirectUrl: `/projects/${projectId}` 
          })
        }
      })
  }

  render() {
    const { redirectUrl } = this.state

    if(redirectUrl) {
      return <Redirect push to={redirectUrl} />
    }

    const { name, img_url, description, errors } = this.props.projectFormData

    return (
      <div>
        <h2>New Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              id='name'
              onChange={this.handleChange}
              value={name}
              className={errors.name && 'invalid'}
            />
            <label htmlFor='name'>Name</label>
            {errors.name && 
              <span data-error={errors.name}></span>}
          </div>

          <div>
            <input 
              type='text'
              id='img_url'
              onChange={this.handleChange}
              value={img_url}
              className={errors.img_url && 'invalid'}
            />
            <label htmlFor='img_url'>Image URL</label>
            {errors.img_url && 
              <span data-error={errors.img_url}></span>}
          </div>
          
          <div>
            <div className='input-field'>
              <textarea 
                id='description'
                onChange={this.handleChange}
                value={description}
                className={errors.description ? 'materialize-textarea invalid' : 'materialize-textarea'}
              />
              <label htmlFor='description'>Description</label>
              {errors.description && 
                <span data-error={errors.description}></span>}
            </div>
          </div>

          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }

  static propTypes = {
    projectFormData: PropTypes.object.isRequired,
    updateProjectFormData: PropTypes.func.isRequired,
    resetProjectForm: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
  }
}

const mapStateToProps = ({ projectFormData }) => ({ projectFormData })

export default connect(mapStateToProps, { 
  updateProjectFormData,
  resetProjectForm,
  createProject 
})(ProjectForm)
