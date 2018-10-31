import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AdminNav from './AdminNav'

const NavBar = (props) => {
  const { admin } = props

  return (
    <ul>
      <li><NavLink exact to='/'>Root</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>

      {admin.auth && <AdminNav admin={admin} />}
    </ul>
  )
}

NavBar.propTypes = {
  admin: PropTypes.object.isRequired
}

export default NavBar