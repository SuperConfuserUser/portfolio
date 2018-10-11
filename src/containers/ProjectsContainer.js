import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectForm from '../components/ProjectForm'

const Projects = ({ projects }) => {
  return (
    <div className="ProjectList">
      <h1>Projects</h1>
      <ProjectForm />
      {projects.map(project=> <ProjectCard key={project.id} project={project} />)}
    </div>
  )
}

export default Projects

