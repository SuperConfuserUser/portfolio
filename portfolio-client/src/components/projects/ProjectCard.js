import React from 'react'

const ProjectCard = (props) => {
  const { id, name, img_url, description} = props.project

  const handleDelete = () => props.deleteProject(id)

  return (
    <div key={id} className="ProjectCard">
      <h3>{name} <button onClick={handleDelete}>X</button></h3>
      <img src={img_url} alt={name} />
      <p>{description}</p>
      <br />
    </div>
  )
}

export default ProjectCard
