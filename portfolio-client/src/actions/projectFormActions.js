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

export const addProjectFormErrors = errors => {
  return {
    type: 'ADD_PROJECT_FORM_ERRORS',
    errors
  }
}
