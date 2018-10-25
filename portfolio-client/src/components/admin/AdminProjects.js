import React from 'react'
import AdminProjectCard from './AdminProjectCard'
import ProjectAdminButtons from '../projects/ProjectAdminButtons'

function AdminProjects(props) {
  const { projects, admin, toggleShowHidden } = props

  const renderProjects = projects.map(project=> 
    <li key={project.id}>
      <AdminProjectCard project={project} admin={admin} toggleShowHidden={toggleShowHidden}  />
      <ProjectAdminButtons project={project} admin={admin} />
    </li>     
  )

  return (
    <ul>
      {renderProjects}
    </ul>
  )
}

export default AdminProjects
