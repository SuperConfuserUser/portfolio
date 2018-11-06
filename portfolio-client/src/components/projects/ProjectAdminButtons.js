import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { deleteProject, toggleHidden } from '../../actions/projectsActions'

class ProjectAdminButtons extends Component {

  handleDelete = () => {
    const { deleteProject, project } = this.props 
    deleteProject(project.id)
      .then(() => this.goBack())
  }
  
  handleHide = () => {
    const { toggleHidden, project, admin } = this.props 
    toggleHidden(project)
      .then(project => {
        if(project.hidden && !admin.showHidden) {
          return this.goBack()
      }})
    }

  goBack = () => {
    const { match, history } = this.props
    if(match.params.projectId) {
      history.goBack()
    }
  }

  render() {

    const { hidden, id } = this.props.project
    const nav = this.props.klass === 'admin-nav'

    const hiddenIcon = hidden
      ? <i className='far fa-eye fa-lg left'></i>
      : <i className='material-icons left'>lock_outline</i>
    const hiddenLabel = hidden ? 'Unhide' : 'Hide'

    const navList = 
      <>
        <li>
          <Link to={`/projects/edit/${id}`}>
            <i className='material-icons left'>edit</i><span>Edit</span>
          </Link>
        </li>

        <li>
          <div onClick={this.handleHide}>
            {hiddenIcon}<span>{hiddenLabel}</span>
          </div>
        </li>
        
        <li>
          <div className='careful' onClick={this.handleDelete}>
            <i className='fas fa-times fa-lg left'></i><span>Delete</span>
          </div>
        </li>
      </>
    
    if(nav) {
      return navList
    }

    return (
      <ul className='project-admin-buttons'>
        <li>
          <Link to={`/projects/edit/${id}`}>
            <button>
                <i className='material-icons'>edit</i><span>Edit</span>
            </button>
          </Link>
        </li>

        <li>
          <button onClick={this.handleHide}>
            {hiddenIcon}<span>{hiddenLabel}</span>
          </button>
        </li>
        
        <li>
          <button className='careful' onClick={this.handleDelete}>
            <i className='fas fa-times fa-lg'></i><span>Delete</span>
          </button>
        </li>
      </ul>
    )
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired
  }
}

export default withRouter(
  connect(null, { 
    deleteProject,
    toggleHidden
  })(ProjectAdminButtons)
)
