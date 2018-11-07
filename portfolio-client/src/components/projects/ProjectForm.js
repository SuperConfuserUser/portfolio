import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProjectFormData, resetProjectForm } from '../../actions/projectFormActions'
import { createProject } from '../../actions/projectsActions'
import TextInput from '../form/TextInput'
import TextArea from '../form/TextArea'

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
    let { id, value } = event.target
    const { updateProjectFormData } = this.props

    //had to rename so default materialize .content wouldn't interfere
    if (id === 'contents') { id = 'content'} 

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

    const { name, img_url, description, category, content, links_attributes, errors } = this.props.projectFormData

    return (
      <div>
        <h2>New Project</h2>
        <form onSubmit={this.handleSubmit}>

          <TextInput id='name' value={name} handleChange={this.handleChange} errors={errors}>Name</TextInput>

          <TextInput id='category' value={category} handleChange={this.handleChange} errors={errors}>Category</TextInput>

          <TextArea id='description' value={description} handleChange={this.handleChange} errors={errors}>Description</TextArea>

          <TextInput id='img_url' value={img_url} handleChange={this.handleChange} errors={errors}>Image URL</TextInput>

          <TextArea id='contents' value={content} handleChange={this.handleChange} errors={errors}>Content (optional)</TextArea>


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
