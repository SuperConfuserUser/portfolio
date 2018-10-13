import React from 'react'
import { withRouter, Link } from 'react-router-dom'


const ProjectCard = (props) => {
  const { id, name, img_url, description} = props.project
  const { match } = props

  const handleDelete = () => props.deleteProject(id)

  const handleEdit = () => {
    //redirect to form page
    // toggle form mode for update with data filled in?
  }
  
  return (
    <div key={id} className="ProjectCard">
      <Link to={`${match.url}/${id}`}>
        <h3>{name}</h3>
        <img src={img_url} alt={name} />
        <p>{description}</p>
      </Link>
      <Link to={`${match.url}/${id}/edit`}><button onClick={handleEdit}>Edit</button></Link> <button onClick={handleDelete}>X</button>
      <br />
    </div>
  )
}

export default withRouter(ProjectCard)
