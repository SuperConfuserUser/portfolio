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
// export const getProjects = () => {
//   return dispatch => {
//     return fetch(`/api/projects/`)
//       .then(response => response.json())
//       .then(projects => dispatch(setProjects(projects)))
//   }
// }
