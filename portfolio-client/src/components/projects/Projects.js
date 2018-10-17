import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

  const { match, projects } = props

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

export default Projects
