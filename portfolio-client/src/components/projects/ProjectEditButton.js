import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProjectEditButton(props) {
  const { id, children } = props

  return (
    <Link to={`/projects/edit/${id}`}>
      {children}
    </Link> 
  )
}

ProjectEditButton.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.object
}

ProjectEditButton.defaultProps = {
  children: <button>Edit</button>
}

export default ProjectEditButton

