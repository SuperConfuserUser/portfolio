// ** Action Creators ** 
export const setProjects = projects => {
  return {
    type: 'GET_PROJECTS_SUCCESS',
    projects
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
