import React from 'react'
import PropTypes from 'prop-types'

function Project(props) {
  const { name, img_url, description } = props.project
  
  return (
    <div>
      <h2>{name}</h2>
      <img src={img_url} alt={name} />
      <p>{description}</p>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project

