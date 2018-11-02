import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProjectFormData, resetProjectForm } from '../../actions/projectFormActions'
import { getProject } from '../../actions/projectActions'
import { updateProject } from '../../actions/projectsActions'

class ProjectUpdateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectUrl: ''
    }
  }

  componentDidMount() {
    const { getProject, projectFormData } = this.props
    const { projectId } = this.props.match.params
  
    if(!projectFormData.name && !Object.keys(projectFormData.errors).length) {
      getProject(projectId, true)
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
    const { updateProject, projectFormData } = this.props

    event.preventDefault()
    updateProject(projectFormData)
      .then(project => {
        if(!project.errors) {
          this.setState({ 
            redirectUrl: `/projects/${project.id}` 
          })
        }
      })
  }

  handleReset = event => {
    event.preventDefault()
    const { getProject } = this.props
    const { projectId } = this.props.match.params
    
    getProject(projectId, true)
  }

  render() {
    const { redirectUrl } = this.state

    if(redirectUrl) {
      return <Redirect push to={redirectUrl} />
    }

    const { name, img_url, description, errors } = this.props.projectFormData

    return (
      <div>
        <h2>Edit Project</h2>
        <form onSubmit={this.handleSubmit} className='project-update-form'>
          <div>
            <input 
              type='text'
              id='name'
              onChange={this.handleChange}
              value={name}
              className={errors && errors.name && 'invalid'}
            />
            <label htmlFor='name' className={name && 'active'}>Name</label>
            {errors && errors.name && 
              <span data-error={errors && errors.name}></span>}
          </div>

          <div>
            <input 
              type='text'
              id='img_url'
              onChange={this.handleChange}
              value={img_url}
              className={errors && errors.img_url && 'invalid'}
            />
            <label htmlFor='img_url' className={img_url && 'active'}>Image URL</label>
            {errors && errors.img_url && 
              <span data-error={errors && errors.img_url}></span>}
          </div>
          
          <div>
            <div className='input-field'>
              <textarea 
                id='description'
                onChange={this.handleChange}
                value={description}
                className={errors && errors.description ? 'materialize-textarea invalid' : 'materialize-textarea'}
              />
              <label htmlFor='description' className={description && 'active'}>Description</label>
              {errors && errors.description && 
                <span data-error={errors && errors.description}></span>}
            </div>
          </div>
          
          <button className='primary-btn'type='submit'>Edit</button>

          <button className='secondary-btn' onClick={this.handleReset}>Reset</button>
          
        </form>
      </div>
    )
  }

  static propTypes = {
    projectFormData: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
    updateProjectFormData: PropTypes.func.isRequired,
    resetProjectForm: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired
  }
}

const mapStateToProps = ({ projectFormData }) => ({ projectFormData })

export default connect(mapStateToProps, { 
  getProject,
  updateProjectFormData,
  resetProjectForm,
  updateProject
})(ProjectUpdateForm)