import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProjectHiddenRoute from './ProjectHiddenRoute'
import Project from './Project'
import { getProject, resetProject } from '../../actions/projectActions'


class ProjectContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    const { getProject, match } = this.props
    getProject(match.params.projectId)
      .then(({ project }) => {
        if(!project.name) {
          this.setState({
            redirect: true
          })
        }
      })
  }

  componentWillUnmount() {
    this.props.resetProject()
  }

  render() {
    const { match, project, admin } = this.props

    if (this.state.redirect) {
      return <Redirect to='/projects' />
    }

    return (
        <ProjectHiddenRoute exact path={match.path} component={Project} project={project} admin={admin} />
    )
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    admin: PropTypes.object.isRequired
  }
}

const mapStateToProps = ({ project }) => ({ project })

export default connect(mapStateToProps, { 
  getProject, 
  resetProject 
})(ProjectContainer)
