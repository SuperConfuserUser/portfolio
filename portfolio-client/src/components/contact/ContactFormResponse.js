import React from 'react'
import PropTypes from 'prop-types'

const ContactFormResponse = props => {

  const { response } = props

  return (
    <div>
       <p>{response}</p>
       <img src="https://media1.tenor.com/images/0b46edf37db3fd5d9ce71c9763bef6af/tenor.gif?itemid=12348454" alt="mail delivered animation" />
    </div>
  )
}

ContactFormResponse.propTypes = {
  response: PropTypes.string.isRequired
}

export default ContactFormResponse

