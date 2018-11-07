const initialState = {
  name: '',
  img_url: '',
  description: '',
  hidden: false,
  category: '',
  content: '',
  links: []
}

export default (state = initialState, action) => {
  switch(action.type) {
  
    case 'GET_PROJECT_SUCCESS':
      return action.project

    case 'UPDATE_PROJECT_SUCCESS':
      return action.project

    case 'RESET_PROJECT':
      return initialState

    default:
      return state
  }
}