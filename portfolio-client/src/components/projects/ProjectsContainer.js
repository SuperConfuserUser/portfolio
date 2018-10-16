import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Projects from './Projects'
import Project from './Project'
import ProjectForm from './ProjectForm'
import ProjectUpdateForm from './ProjectUpdateForm'
import { getProjects } from '../../actions/projectsActions'

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { match, projects, deleteProject } = this.props

    return (
      <div className="ProjectList">
        <h1>Projects</h1>
       
        <Switch>
          <Route exact path={match.path} render={(props) => (
            <Projects
              {...props}
              projects={projects} 
              deleteProject={deleteProject}
            />
          )} />
          <Route path={`${match.path}/new`} component={ProjectForm} />
          <Route path={`${match.path}/:projectId/edit`} component={ProjectUpdateForm} />
          <Route path={`${match.path}/:projectId`} component={Project} />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps, { getProjects})(ProjectsContainer)