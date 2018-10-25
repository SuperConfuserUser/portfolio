import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectHiddenRoute from './ProjectHiddenRoute'
import { getProject, resetProject } from '../../actions/projectActions'
import Project from './Project'

export class ProjectContainer extends Component {

  componentDidMount() {
    const { getProject, match } = this.props
    getProject(match.params.projectId)
  }

  componentWillUnmount() {
    this.props.resetProject()
  }

  render() {
    const { match, project, admin } = this.props

    return (
      <div>
        <ProjectHiddenRoute exact path={match.path} component={Project} project={project} admin={admin} />
      </div>
    )
  }
}

const mapStateToProps = ({ project }) => ({ project })

export default connect(mapStateToProps, { getProject, resetProject })(ProjectContainer)
