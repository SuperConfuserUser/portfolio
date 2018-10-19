import React from 'react'
import AdminProjectCard from './AdminProjectCard'

function AdminProjects(props) {
  const { projects, admin, toggleShowHidden } = props

  const renderProjects = projects.map(project=> 
      <AdminProjectCard key={project.id} project={project} admin={admin} toggleShowHidden={toggleShowHidden}  />
  )

  return (
    <ul>
      {renderProjects}
    </ul>
  )
}

export default AdminProjects
