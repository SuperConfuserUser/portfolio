import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import ProjectAdminButtons from '../projects/ProjectAdminButtons'
 
function AdminProjectCard(props) {
  const { project, admin, history, toggleShowHidden } = props
  const { id, name, created_at, hidden } = project

  const handleViewHidden = () => {
    if(!admin.showHidden) {
      toggleShowHidden()
    }

    history.push(`projects/${project.id}`)
  }

  const link = hidden
    ? <i className='far fa-eye-slash fa-lg fa-flip-horizontal' onClick={handleViewHidden}></i>
    : <Link to={`projects/${project.id}`}>
        <i className='fa fa-link'></i>
      </Link>  

  const date = new Date(created_at)
    .toLocaleDateString('en-US', { 
      month:'numeric', day: 'numeric', year: '2-digit' 
    })

  return (
    <tr>
      <td className='id'>{id}</td>
      <td className='name'>{name}</td>
      <td className='link'>{link}</td>
      <td className='actions'>
        <ProjectAdminButtons admin={admin} project={project} />
      </td>
      <td className='date'>{date}</td>
    </tr>
  )
}

AdminProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  toggleShowHidden: PropTypes.func.isRequired
}

export default withRouter(AdminProjectCard)
