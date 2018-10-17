import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { deleteProject, toggleHidden } from '../../actions/projectsActions'

class ProjectAdminButtons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleDelete = () => {
    const { deleteProject, project } = this.props 
    deleteProject(project.id)
      .then(() => this.setState({ redirect: true }))
  }
  
  handleHide = () => {
    const { toggleHidden, project } = this.props 
    toggleHidden(project)
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/projects' />
    }

    const { hidden } = this.props.project

    return (
      <div>
        <Link to={`/projects/${this.props.id}/edit`}><button>Edit</button></Link> 
        <button onClick={this.handleHide}>{hidden ? 'Unhide' : 'Hide'}</button> 
        <button onClick={this.handleDelete}>X</button> 
      </div>
    )
  }
}

export default withRouter(
  connect(null, { deleteProject, toggleHidden })(ProjectAdminButtons)
)
