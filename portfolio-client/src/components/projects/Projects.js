import React from 'react'
import { Link } from 'react-router-dom'

import ProjectCard from './ProjectCard'

const Projects = (props) => {

  const { match, projects, deleteProject } = props

  const renderProjects = projects.map(project=> 
      <ProjectCard 
        key={project.id} 
        project={project} 
        deleteProject={deleteProject} 
      />
  )

  return (
    <div>
      <Link to={`${match.url}/new`}>+</Link>

      {renderProjects}
    </div>
  )
}

export default Projects
