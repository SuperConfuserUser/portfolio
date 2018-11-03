import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteProject, toggleHidden } from '../../actions/projectsActions'
import Edit from './ProjectEditButton'

class ProjectAdminButtons extends Component {

  handleDelete = () => {
    const { deleteProject, project } = this.props 
    deleteProject(project.id)
      .then(() => this.goBack())
  }
  
  handleHide = () => {
    const { toggleHidden, project, admin } = this.props 
    toggleHidden(project)
      .then(project => {
        if(project.hidden && !admin.showHidden) {
          return this.goBack()
      }})
    }

  goBack = () => {
    const { match, history } = this.props
    if(match.params.projectId) {
      history.goBack()
    }
  }

  render() {

    const { hidden, id } = this.props.project

    return (
      <div>
        <Edit id={id} />
        <button onClick={this.handleHide}>{hidden ? 'Unhide' : 'Hide'}</button> 
        <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    deleteProject: PropTypes.func.isRequired,
    toggleHidden: PropTypes.func.isRequired
  }
}

export default withRouter(
  connect(null, { 
    deleteProject,
    toggleHidden
  })(ProjectAdminButtons)
)
