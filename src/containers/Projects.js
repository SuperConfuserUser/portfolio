import React from 'react'

const Projects = ({ projects }) => {
  return (
    <div className="ProjectList">
      <h1>Projects</h1>
      {projects.map(project=> 
        <div key={project.id} className="ProjectCard">
          <h3>{project.name}</h3>
          <img src={project.img_url} alt={project.name} />
          <p>{project.description}</p>
          <br />
        </div>
      )}
    </div>
  )
}

export default Projects

