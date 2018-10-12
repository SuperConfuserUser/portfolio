import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProjectCard from '../components/projects/ProjectCard'
import ProjectForm from '../components/projects/ProjectForm'
import { getProjects, deleteProject } from '../actions/projectsActions'

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects()
  }
 
  render() {
    const { projects } = this.props

    return (
      <div className="ProjectList">
        <h1>Projects</h1>
        <ProjectForm />
        {projects.map(project=> <ProjectCard key={project.id} project={project} deleteProject={this.props.deleteProject} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps, { 
  getProjects,
  deleteProject
})(Projects)