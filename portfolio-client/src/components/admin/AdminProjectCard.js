import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
 
function AdminProjectCard(props) {
  const { project, admin, history, toggleShowHidden } = props

  const handleViewHidden = () => {
    if(!admin.showHidden) {
      toggleShowHidden()
    }

    history.push(`projects/${project.id}`)
  }

  return (
    <div>
      {project.name} - {project.hidden ? 
        <button onClick={handleViewHidden}>view hidden</button> : 
        <Link to={`projects/${project.id}`}>view</Link>  
      }
    </div>
  )
}

AdminProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  toggleShowHidden: PropTypes.func.isRequired
}

export default withRouter(AdminProjectCard)
