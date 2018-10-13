import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProjectFormData, resetProjectForm, getProjectFormData } from '../../actions/projectFormActions'
import { updateProject } from '../../actions/projectsActions'

class ProjectUpdateForm extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('component mounted')
    this.props.getProjectFormData(this.props.match.params.projectId)
  }

  handleChange = event => {
    const { name, value } = event.target
    const currentProject = { ...this.props.projectFormData,  [name]: value }
    this.props.updateProjectFormData(currentProject)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateProject(this.props.projectFormData)
  }

  render() {
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
