export const toggleShowHidden = () => {
  return {
    type: 'TOGGLE_SHOW_HIDDEN'  
  }
}

export const authorizeAdmin = () => {
  return {
    type: 'AUTHORIZE_ADMIN'
  }
}

export const logoutAdmin = () => {
  return {
    type: 'RESET_ADMIN'
  }
}