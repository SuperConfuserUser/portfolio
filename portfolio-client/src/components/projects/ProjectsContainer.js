import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Projects from './Projects'
import ProjectForm from './ProjectForm'
import ProjectUpdateForm from './ProjectUpdateForm'
import { getProjects, deleteProject } from '../../actions/projectsActions'

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
          <Route path={`${match.path}/:projectId`} render={(props) => (<ProjectPage {...props} projects={projects} />)} />
        </Switch>
      </div>
    )
  }
}

const ProjectPage = (props) => {
  const { match } = props

  const project = {
    name: 'placeholder', 
    id: match.params.projectId
  }

  // set project to equal an API request action 

  return(
    <div>
      <h2>{project.name} {project.id}</h2>
    </div>
  )
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps, { 
  getProjects,
  deleteProject
})(ProjectsContainer)