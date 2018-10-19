import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { deleteProject, toggleHidden } from '../../actions/projectsActions'

class ProjectAdminButtons extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.goBack = this.goBack.bind(this)
  }

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

    return (
      <div>
        <Link to={`/projects/${id}/edit`}><button>Edit</button></Link> 
        <button onClick={this.handleHide}>{hidden ? 'Unhide' : 'Hide'}</button> 
        <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default withRouter(
  connect(mapStateToProps, { deleteProject, toggleHidden })(ProjectAdminButtons)
)
