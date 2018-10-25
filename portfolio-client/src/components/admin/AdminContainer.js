import React from 'react'
import PropTypes from 'prop-types'
import AdminDashboard from './AdminDashboard'


const AdminContainer = (props) => {
  const { admin } = props
  return (
    <div>
      <AdminDashboard admin={admin} />
    </div>
  )
}

AdminContainer.propTypes = {
  admin: PropTypes.object.isRequired
}

export default AdminContainer
