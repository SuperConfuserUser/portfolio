// ** Action Creators ** 
export const updateProjectFormData = projectFormData => {
  return {
    type: 'UPDATED_DATA',
    projectFormData
  }
}

export const resetProjectForm = () => {
  return {
    type: 'RESET_PROJECT_FORM'
  }
}


// ** Async Actions **
export const getProjectFormData = (id) => {
  return dispatch => {
    return fetch(`/api/projects/` + id)
      .then(response => response.json())
      .then(project => {
        dispatch(updateProjectFormData(project)
      )})
      .catch(({ error }) => console.log(error))
  }
}
