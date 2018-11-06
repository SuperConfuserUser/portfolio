import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutAdmin } from '../../actions/adminActions'

function AdminLogout(props) {
  const handleLogout = event => {
    event.preventDefault()
    props.logoutAdmin()
  }

  return (
    <>
      <li className={props.klass}><a href='#!' onClick={handleLogout}>Logout</a></li>
    </>
  )
}

AdminLogout.propTypes = {
  klass: PropTypes.string
}

export default connect(null, { logoutAdmin })(AdminLogout)
