
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
        return project
      })
      .catch(({ error }) => console.log(error))
  }
}

export const updateProject = project => {
  return dispatch => {
    return fetch('/api/projects/' + project.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ project: project })
    })
      .then(response => response.json())
      .then(project => {
        dispatch(updateProjectSuccess(project))
        return project
      })
      .catch(({ error }) => console.log(error))
  }
}

export const deleteProject = id => {
  return dispatch => {
    return fetch('/api/projects/' + id, {
      method: 'DELETE' 
    })
      .then(response => response.json())
      .then(({ message }) => {
        console.log(message)
        dispatch(deleteProjectSuccess(id))
      })
      .catch(({ error }) => console.log(error))
  }
}