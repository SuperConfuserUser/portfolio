import { updateProjectFormData } from './projectFormActions'

// ** Action Creators ** 
export const setProject = project => {
  return {
    type: 'GET_PROJECT_SUCCESS',
    project
  }
}

// ** Async Actions **
export const getProject = (id) => {
  return dispatch => {
    return fetch(`/api/projects/` + id)
      .then(response => response.json())
      .then(project => {
        dispatch(setProject(project))
        dispatch(updateProjectFormData(project))
      })
      .catch(({ error }) => console.log(error))
  }
}