import React, { Component } from 'react'
import AdminProjectsContainer from './AdminProjectsContainer'
import ProjectAdminControls from '../projects/ProjectAdminControls'

export class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <h2>Admin Dashboard</h2>
        <ProjectAdminControls />
        <AdminProjectsContainer />
      </div>
    )
  }
}

export default AdminDashboard

