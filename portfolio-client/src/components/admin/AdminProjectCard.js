import React from 'react'
import ProjectAdminButtons from '../projects/ProjectAdminButtons'
import { Link, Redirect, withRouter } from 'react-router-dom'
 
function AdminProjectCard(props) {
  const { project } = props

  const handleViewHidden = () => {
    const { admin, toggleShowHidden, history } = props
    if(!admin.showHidden) {
      toggleShowHidden()
    }
    history.push(`projects/${project.id}`)
  }

  return (
    <li>
      {project.name} - {project.hidden ? 
        <button onClick={handleViewHidden}>view hidden</button> : 
        <Link to={`projects/${project.id}`}>view</Link>  
      }
      
      <ProjectAdminButtons project={project} />
    </li>
  )
}

export default withRouter(AdminProjectCard)
