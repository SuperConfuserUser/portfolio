import React from 'react'
import PropTypes from 'prop-types'
import AdminProjectsContainer from './AdminProjectsContainer'
import ProjectAdminControls from '../projects/ProjectAdminControls'

const AdminContainer = (props) => {
  const { admin } = props
  return (
    <div>
      <h3>Admin DashBoard</h3>
      <ProjectAdminControls />
      <AdminProjectsContainer admin={admin} />
    </div>
  )
}

AdminContainer.propTypes = {
  admin: PropTypes.object.isRequired
}

export default AdminContainer
