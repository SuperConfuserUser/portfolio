const initialState = {
  auth: false,
  showHidden: false
}

export default (state = initialState, action) => {
  switch(action.type) {
  
    case 'RESET_ADMIN':
      return initialState
    
    case 'AUTHORIZE_ADMIN':
      return { ...state, auth: true }
    
    case 'TOGGLE_SHOW_HIDDEN':
      return { ...state, showHidden: !state.showHidden }

    default:
      return state
  }
}