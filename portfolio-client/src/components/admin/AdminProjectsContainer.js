import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProjects, deleteProject, updateProject } from '../../actions/projectsActions'
import { toggleShowHidden } from '../../actions/adminActions'
import AdminProjects from './AdminProjects'

class AdminProjectsContainer extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { projects, admin, toggleShowHidden } = this.props

    return (
      <div>
       <AdminProjects projects={projects} admin={admin} toggleShowHidden={toggleShowHidden} />
      </div>
    )
  }
}

const mapStateToProps = ({ projects, admin }) => ({ projects, admin })

export default connect(mapStateToProps, { getProjects, deleteProject, updateProject, toggleShowHidden })(AdminProjectsContainer)