import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav(props) {
  const handleLogout = event => {
    event.preventDefault()
    props.logoutAdmin()
  }

  return (
    <div className='admin-nav'>
      <Link to='/admin'><i className='material-icons admin-icon'>settings</i></Link>
    </div>
  )
}

export default AdminNav
