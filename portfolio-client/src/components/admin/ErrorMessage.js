import React from 'react'
import PropTypes from 'prop-types'

function ErrorMessage(props) {
  return (
    <div className='error-msg'>
      <i class='material-icons'>block</i>
      <span>{props.message}</span>
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage