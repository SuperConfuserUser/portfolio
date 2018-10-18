import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProjectAdminControls from './ProjectAdminControls'
import Projects from './Projects'
import Project from './Project'
import ProjectContainer from './ProjectContainer'
import ProjectForm from './ProjectForm'
import ProjectUpdateForm from './ProjectUpdateForm'
import { getProjects } from '../../actions/projectsActions'

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { match, projects, project, admin, deleteProject } = this.props

    return (
      <div className="ProjectList">
        <h1>Projects</h1>
        <ProjectAdminControls />
        <Switch>
          <Route exact path={match.path} render={(props) => (
            <Projects
              {...props}
              projects={projects} 
              deleteProject={deleteProject}
              admin={admin}
            />
          )} />
          <Route path={`${match.path}/new`} component={ProjectForm} />
          <Route path={`${match.path}/:projectId/edit`} component={ProjectUpdateForm} />
          <Route path={`${match.path}/:projectId`} component={ProjectContainer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ projects, project, admin }) => ({ projects, project, admin })

export default connect(mapStateToProps, { getProjects})(ProjectsContainer)