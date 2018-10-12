const initialState = {
  name: '',
  img_url: '',
  description: ''
}

export default ( state = initialState, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.projectFormData
    
    case 'RESET_PROJECT_FORM':
      return initialState
      
    default:
      return state
  }
}