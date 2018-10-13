import React, { Component } from 'react'
import { connect } from 'react-redux'

import Projects from './Projects'
import ProjectForm from './ProjectForm'
import ProjectUpdateForm from './ProjectUpdateForm'
import { getProjects, deleteProject } from '../../actions/projectsActions'

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.getProjects()
  }
 
  render() {
    return (
      <div className="ProjectList">
        <h1>Projects</h1>
        <ProjectForm />
        <ProjectUpdateForm id={1} />
        <Projects projects={this.props.projects} deleteProject={this.props.deleteProject} />
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps, { 
  getProjects,
  deleteProject
})(ProjectsContainer)