const initialState = {
  auth: false,
  token: '',
  showHidden: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
  
    case 'RESET_ADMIN':
      return initialState
    
    case 'AUTHORIZE_ADMIN':
      return { ...state,
         auth: true, 
         error: false, 
         token: action.token 
        }
    
    case 'ADD_LOGIN_ERROR':
      return { ...state, error: true }
    
    case 'TOGGLE_SHOW_HIDDEN':
      return { ...state, showHidden: !state.showHidden }

    default:
      return state
  }
}