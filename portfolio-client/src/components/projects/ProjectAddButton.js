import React from 'react'
import { Link } from 'react-router-dom'

function ProjectAddButton() {
  return (
    <>
      <Link to='/projects/new'>
        <button>
          <i className='material-icons left'>add</i><span>Add</span>
        </button>
      </Link>
    </>
  )
}

export default ProjectAddButton
