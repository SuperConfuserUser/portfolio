import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="ProjectCard">
      <h3>{project.name}</h3>
      <img src={project.img_url} alt={project.name} />
      <p>{project.description}</p>
      <br />
    </div>
  )
}

export default ProjectCard
