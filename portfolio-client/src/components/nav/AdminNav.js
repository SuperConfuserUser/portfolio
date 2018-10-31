import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logoutAdmin } from '../../actions/adminActions'

function AdminNav(props) {
  const handleLogout = event => {
    event.preventDefault()
    props.logoutAdmin()
  }

  return (
    <div className='admin-nav'>
      <li><NavLink to='/admin'>Dashboard</NavLink></li>
      <li><Link to='#' onClick={handleLogout}>Logout</Link></li>
    </div>
  )
}

export default connect(null, { logoutAdmin })(AdminNav)
