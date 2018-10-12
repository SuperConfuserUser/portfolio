import { resetProjectForm } from './projectFormActions'

// ** Action Creators ** 
export const setProjects = projects => {
  return {
    type: 'GET_PROJECTS_SUCCESS',
    projects
  }
}

export const addProject = project => {
  return {
    type: 'CREATE_PROJECT_SUCCESS',
    project
  }
}


// ** Async Actions **
export const getProjects = () => {
  return dispatch => {
    return fetch(`/api/projects/`)
      .then(response => response.json())
      .then(projects => dispatch(setProjects(projects)))
  }
}

export const createProject = project => {
  return dispatch => {
    return fetch('/api/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ project: project })
    })
      .then(response => response.json())
      .then(project => {
        dispatch(addProject(project))
        dispatch(resetProjectForm())
      })
      .catch(error => console.log(error))
  }
}
