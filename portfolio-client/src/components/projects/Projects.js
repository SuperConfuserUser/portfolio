import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

  const { projects, admin } = props

  const shownProjects = admin.showHidden ? projects : projects.filter(project => !project.hidden)

  const renderProjects = shownProjects.map(project=> 
      <ProjectCard key={project.id} project={project} />
  )

  return (
    <div>
      {renderProjects}
    </div>
  )
}

export default Projects
