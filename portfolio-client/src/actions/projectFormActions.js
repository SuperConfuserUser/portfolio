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

