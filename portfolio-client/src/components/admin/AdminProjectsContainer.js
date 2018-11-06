import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, updateProject } from '../../actions/projectsActions'
import { toggleShowHidden } from '../../actions/adminActions'
import AdminProjects from './AdminProjects'
import ProjectAdminControls from '../projects/ProjectAdminControls'

class AdminProjectsContainer extends Component {
  componentDidMount() {
    const { projects, getProjects } = this.props
    if(projects.length === 0) {
      getProjects()
    }
  }

  render() {
    const { projects, admin, toggleShowHidden } = this.props

    return (
      <div>
        <ProjectAdminControls />        
        <h2>Admin DashBoard
          <span>Projects</span>
        </h2>
        <AdminProjects projects={projects} admin={admin} toggleShowHidden={toggleShowHidden} />
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(
  mapStateToProps, { 
    getProjects,
    deleteProject,
    updateProject,
    toggleShowHidden 
  })(AdminProjectsContainer)