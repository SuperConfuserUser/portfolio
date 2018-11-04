import React from 'react'
import AdminProjectCard from './AdminProjectCard'

function AdminProjects(props) {
  const { projects, admin, toggleShowHidden } = props

  const renderProjects = projects.map(project=> 
    <AdminProjectCard key={project.id} project={project} admin={admin} toggleShowHidden={toggleShowHidden}  />
  )

  return (
    <table className='admin-projects'>
      <thead>
        <tr>
          <th className='id'>Id</th>
          <th className='name'>Name</th>
          <th className='link'>Link</th>
          <th className='actions'>Actions</th>
          <th className='date'>Date</th>
        </tr>
      </thead>

      <tbody>
        {renderProjects}
      </tbody>
    </table>
  )
}

export default AdminProjects
