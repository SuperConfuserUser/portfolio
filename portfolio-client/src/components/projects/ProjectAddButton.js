import React from 'react'
import { Link } from 'react-router-dom'

function ProjectAddButton() {
  return (
    <>
      <Link to='/projects/new'><i className='material-icons left'>add</i><span>Add</span></Link>
    </>
  )
}

export default ProjectAddButton
