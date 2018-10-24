import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import ProjectAdminButtons from './ProjectAdminButtons'

const ProjectCard = props => {
  const { id, name, img_url, description } = props.project
  const { match, project } = props

  return (
    <div key={id} className="ProjectCard">
      <Link to={`${match.url}/${id}`}>
        <h3>{name}</h3>
        <img src={img_url} alt={name} />
        <p>{description}</p>
      </Link>

      <ProjectAdminButtons project={project} />
      <br />
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default withRouter(ProjectCard)
