import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'

const ProjectCard = props => {
  const { id, name, img_url, description } = props.project
  const { match } = props

  return (
    <div key={id} className="ProjectCard">
      <Link to={`${match.url}/${id}`}>
        <h3>{name}</h3>
        <img src={img_url} alt={name} />
        <p>{description}</p>
      </Link>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default withRouter(ProjectCard)
