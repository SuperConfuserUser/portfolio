import React from 'react'
import AdminProjectCard from './AdminProjectCard'

const AdminProjects = props => {
  const { projects, admin, toggleShowHidden } = props

  const sortedProjects = projects.sort((a, b) => a.id < b.id)

  const renderProjects = sortedProjects.map(project=> 
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
