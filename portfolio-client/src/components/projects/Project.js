import React from 'react'
import ProjectAdminButtons from './ProjectAdminButtons'

function Project(props) {
  const { project } = props
  
  return (
    <div>
      <ProjectAdminButtons project={project} />

      <h2>{project.name}</h2>
      <img src={project.img_url} alt={project.name} />
      <p>{project.description}</p>
    </div>
  )
}

export default Project

