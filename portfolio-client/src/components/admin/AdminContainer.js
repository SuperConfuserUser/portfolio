import React from 'react'
import PropTypes from 'prop-types'
import AdminProjectsContainer from './AdminProjectsContainer'

const AdminContainer = (props) => {
  const { admin } = props
  return (
    <div>
      <h2>Admin DashBoard
        <span>Projects</span>
      </h2>
      <AdminProjectsContainer admin={admin} />
    </div>
  )
}

AdminContainer.propTypes = {
  admin: PropTypes.object.isRequired
}

export default AdminContainer
