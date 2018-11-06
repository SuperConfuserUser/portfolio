import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectHiddenRoute = ({ component: Component, project, admin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        project.hidden && !admin.showHidden ?
          //TODO: use history to redirect back to prev page. can also come from the dashboard
          <Redirect to='/projects' /> :
          <Component {...props} project={project} admin={admin} />
      }
    />
  )
}

ProjectHiddenRoute.propTypes = {
  component: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
}

export default ProjectHiddenRoute