const initialState = {
  name: '',
  img_url: '',
  description: '',
  errors: {}
}

export default ( state = initialState, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.projectFormData
    
    case 'RESET_PROJECT_FORM':
      return initialState

    case 'ADD_PROJECT_FORM_ERRORS':
      return {...state, errors: action.errors}
      
    default:
      return state
  }
}