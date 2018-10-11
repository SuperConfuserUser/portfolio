import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = ({ projects }) => {
  return (
    <div className="ProjectList">
      <h1>Projects</h1>
      {projects.map(project=> <ProjectCard key={project.id} project={project} />)}
    </div>
  )
}

export default Projects

