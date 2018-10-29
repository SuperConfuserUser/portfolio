import { resetProjectForm, addProjectFormErrors } from './projectFormActions'

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

export const updateProjectSuccess = project => {
  return {
    type: 'UPDATE_PROJECT_SUCCESS',
    project
  }
}

export const deleteProjectSuccess = id => {
  return {
    type: 'DELETE_PROJECT_SUCCESS',
    id
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

export const createProject = (project) => {
  const token =`Bearer ${localStorage.getItem('jwt')}`
  return dispatch => {
    return fetch('/api/projects/', {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ project: project })
    })
      .then(response => response.json())
      .then(project => {
        if(project.errors) {
          dispatch(addProjectFormErrors(project.errors))
        } else {
          dispatch(addProject(project))
          dispatch(resetProjectForm())
          return project.id
        }
      })
      .catch(error => console.log('project form error: ', error))
  }
}

export const updateProject = project => {
  const token =`Bearer ${localStorage.getItem('jwt')}`
  return dispatch => {
    return fetch('/api/projects/' + project.id, {
      method: 'PUT',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ project: project })
    })
      .then(response => response.json())
      .then(project => {
        project.errors ?
          dispatch(addProjectFormErrors(project.errors)) :
          dispatch(updateProjectSuccess(project))
        return project
      })
      .catch(error => console.log('update project error: ', error))
  }
}

export const deleteProject = id => {
  const token =`Bearer ${localStorage.getItem('jwt')}`
  return dispatch => {
    return fetch('/api/projects/' + id, {
      method: 'DELETE',
      headers: {
        authorization: token,
      }
    })
      .then(response => response.json())
      .then(({ message }) => {
        dispatch(deleteProjectSuccess(id))
      })
      .catch(error=> console.log('delete project error: ', error))
  }
}

export const toggleHidden = project => {
  const token =`Bearer ${localStorage.getItem('jwt')}`  
  return dispatch => {
    return fetch('/api/projects/' + project.id, {
      method: 'PUT',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ project: 
        { hidden: !project.hidden } 
      })
    })
      .then(response => response.json())
      .then(project => {
        dispatch(updateProjectSuccess(project))
        return project
      })
      .catch(error=> console.log('project toggle hidden error: ', error))
  }
}