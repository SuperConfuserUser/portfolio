import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProjectFormData, resetProjectForm } from '../../actions/projectFormActions'
import { createProject } from '../../actions/projectsActions'
import TextInput from '../form/TextInput'

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

          <TextInput id='name' value={name} handleChange={this.handleChange} errors={errors}>Name</TextInput>

          <TextInput id='img_url' value={img_url} handleChange={this.handleChange} errors={errors}>Image URL</TextInput>

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
