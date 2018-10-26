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
    const { name, value } = event.target
    const { updateProjectFormData } = this.props
    const currentProject = { ...this.props.projectFormData,  [name]: value }

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

  render() {
    const { redirectUrl } = this.state

    if(redirectUrl) {
      return <Redirect push to={redirectUrl} />
    }

    const { name, img_url, description, errors } = this.props.projectFormData

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
            {errors && errors.name}
          </div>
          <div>
            <label htmlFor="img_url">Image URL</label>
            <input 
              type="text" 
              name="img_url"
              onChange={this.handleChange}
              value={img_url}
            />
           {errors && errors.img_url}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description"
              onChange={this.handleChange}
              value={description}
            />
            {errors && errors.description}
          </div>
          <br />
          <input type="submit" value="Update" />
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