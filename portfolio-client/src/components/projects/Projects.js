import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard'

const Projects = props => {

  const { projects } = props

  const renderProjects = projects.map(project=> 
      <ProjectCard 
        key={project.id}
        project={project} 
      />
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


