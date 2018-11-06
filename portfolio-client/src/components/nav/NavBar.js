import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {

  return (
    <>
      <li><NavLink exact to='/'>Root</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
  )
}

export default NavBar