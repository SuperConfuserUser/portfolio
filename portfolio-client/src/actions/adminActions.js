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

// ** Async Actions **
export const login = auth => {
  console.log('logging in...')
  return dispatch => {
    return fetch('/api/user_token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth: {password: 'admin', email: 'admin@chelyho.com'} })
    })
      .then(response => response.json())
      .then(auth => 
        console.log('login: ', auth)
      )
      .catch(error => console.log('contact form error: ', error))
  }
}