import React from 'react'
import { connect } from 'react-redux'
import { logoutAdmin } from '../../actions/adminActions'

function AdminLogout(props) {
  const handleLogout = event => {
    event.preventDefault()
    props.logoutAdmin()
  }

  return (
    <>
      <li className='logout'><a href='#!' onClick={handleLogout}>Logout</a></li>
    </>
  )
}

export default connect(null, { logoutAdmin })(AdminLogout)
