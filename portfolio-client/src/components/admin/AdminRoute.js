import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const AdminRoute = ({ component: Component, admin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        admin.auth ? 
          <Component {...props} admin={admin} /> :
          <Redirect to='/login' />
      }
    />
  )
}

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired
}

export default AdminRoute