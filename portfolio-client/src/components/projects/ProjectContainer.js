import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProjectHiddenRoute from './ProjectHiddenRoute'
import Project from './Project'
import ProjectAdminButtons from './ProjectAdminButtons'
import { getProject, resetProject } from '../../actions/projectActions'


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
        {admin.auth && 
          <ProjectAdminButtons project={project} admin={admin} />}

        <ProjectHiddenRoute exact path={match.path} component={Project} project={project} admin={admin} />
      </div>
    )
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
    resetProject: PropTypes.func.isRequired
  }
}

const mapStateToProps = ({ project }) => ({ project })

export default connect(mapStateToProps, { getProject, resetProject })(ProjectContainer)
