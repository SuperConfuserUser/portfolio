import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProjectFormData, resetProjectForm } from '../../actions/projectFormActions'
import { getProject } from '../../actions/projectActions'
import { updateProject } from '../../actions/projectsActions'
import TextInput from '../form/TextInput'

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
    const editMode = true

    if(redirectUrl) {
      return <Redirect push to={redirectUrl} />
    }

    const { name, img_url, description, errors } = this.props.projectFormData

    return (
      <div>
        <h2>Edit Project</h2>
        <form onSubmit={this.handleSubmit} className='project-update-form'>

          <TextInput id='name' value={name} handleChange={this.handleChange} errors={errors} editMode={editMode}>Name</TextInput>

          <TextInput id='img_url' value={img_url} handleChange={this.handleChange} errors={errors} editMode={editMode}>Image URL</TextInput>
          
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