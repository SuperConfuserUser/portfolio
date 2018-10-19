import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAdmin } from '../../actions/adminActions'

function AdminNav(props) {
  const handleLogout = () => {
    props.logoutAdmin()
  }

  return (
    <div>
      <br />
      <NavLink to='/admin'>Unicorn</NavLink>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default connect(null, { logoutAdmin })(AdminNav)
