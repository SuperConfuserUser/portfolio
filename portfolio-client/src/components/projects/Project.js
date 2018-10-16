import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProject } from '../../actions/projectActions'

class Project extends Component {

  componentDidMount() {
    const { getProject, match } = this.props
    getProject(match.params.projectId)
  }
  
  render() {
    const { project } = this.props

    return(
      <div>
        <h2>{project.name}</h2>
        <img src={project.img_url} alt={project.name} />
        <p>{project.description}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ project }) => ({ project })

export default withRouter(connect(mapStateToProps, { getProject, deleteProject })(Project))
