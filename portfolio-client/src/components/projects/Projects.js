import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard'
import ProjectAdminButtons from './ProjectAdminButtons'

const Projects = props => {

  const { projects, admin } = props

  const renderProjects = projects.map(project=> 
    <div key={project.id}>
      <ProjectCard project={project} />
      {admin.auth &&
        <ProjectAdminButtons project={project} admin={admin} />}
      <br />
    </div>
  )

  return (
    <div>
      {renderProjects}
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects


