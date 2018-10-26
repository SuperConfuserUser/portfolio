import { updateProjectFormData } from './projectFormActions'

// ** Action Creators ** 
export const setProject = project => {
  return {
    type: 'GET_PROJECT_SUCCESS',
    project
  }
}

export const resetProject = () => {
  return {
    type: 'RESET_PROJECT'
  }
}

// ** Async Actions **
export const getProject = (id, formData = false) => {
  return dispatch => {
    return fetch(`/api/projects/` + id)
      .then(response => response.json())
      .then(project => 
        formData ? 
          dispatch(updateProjectFormData(project)) :
          dispatch(setProject(project))
      )
      .catch(({ error }) => console.log(error))
  }
}