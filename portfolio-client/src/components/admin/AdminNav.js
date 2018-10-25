import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAdmin } from '../../actions/adminActions'

function AdminNav(props) {
  const handleLogout = () => {
    props.logoutAdmin()
  }

  const { admin } = props

  return (
    <div>
      <br />
      <NavLink to='/admin'>Dashboard</NavLink> &nbsp;
      {admin.auth && 
        <button onClick={handleLogout} >Logout</button>}
    </div>
  )
}

export default connect(null, { logoutAdmin })(AdminNav)
