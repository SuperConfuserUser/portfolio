import React from 'react'
import PropTypes from 'prop-types'

function ProjectVisibilityButton(props) {

  const { admin, toggleShowHidden } = props

  const handleShowHidden = () => {
    toggleShowHidden()
  }

  const hiddenIcon = admin.showHidden
    ? <i className='far fa-eye-slash fa-lg'></i>
    : <i className='far fa-eye fa-lg'></i>
   const hiddenLabel = admin.showHidden
    ? 'Hide Hidden'
    : 'Show Hidden' 

  return (
    <button className='visibility-btn' onClick={handleShowHidden}>
      {hiddenIcon}<span>{hiddenLabel}</span>
    </button>
  )
}

ProjectVisibilityButton.propTypes = {
  admin: PropTypes.object.isRequired,
  toggleShowHidden: PropTypes.func.isRequired
}

export default ProjectVisibilityButton

