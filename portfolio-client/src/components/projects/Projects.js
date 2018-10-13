import React from 'react'
import { Link } from 'react-router-dom'

import ProjectForm from './ProjectForm'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

  const { match, projects, deleteProject } = props

  const renderProjects = projects.map(project=> 
    // <Link to={`${match.url}/${project.id}`}>
      <ProjectCard 
        key={project.id} 
        project={project} 
        deleteProject={deleteProject} 
      />
    // </Link>
  )

  return (
    <div>
      <Link to={`${match.url}/new`}>+</Link>

      {renderProjects}
    </div>
  )
}

export default Projects
