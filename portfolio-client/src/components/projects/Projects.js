import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

  const renderProjects = props.projects.map(project=> 
    <ProjectCard 
      key={project.id} 
      project={project} 
      deleteProject={props.deleteProject} 
    />)

  return (
    <div>
    {renderProjects}
    </div>
  )
}

export default Projects
