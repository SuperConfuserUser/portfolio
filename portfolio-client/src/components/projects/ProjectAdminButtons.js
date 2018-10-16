import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { deleteProject } from '../../actions/projectsActions'

class ProjectAdminButtons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = () => {
    const { deleteProject, id } = this.props 
    deleteProject(id)
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/projects' />
    }

    return (
      <div>
        <Link to={`/projects/${this.props.id}/edit`}><button>Edit</button></Link> <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

export default withRouter(
  connect(null, { deleteProject })(ProjectAdminButtons)
)
