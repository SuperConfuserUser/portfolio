import React from 'react'
import PropTypes from 'prop-types'

function ErrorMessage(props) {
  return (
    <p className='error-msg'>
      <i className='fa fa-ban fa-lg'></i>
      {props.message}
    </p>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage