import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function ProjectAdminControls(props) {
  return (
    <div>
      Admin: 
      <Link to={`${props.match.url}/new`}>+</Link>

    </div>
  )
}

export default withRouter(ProjectAdminControls)
