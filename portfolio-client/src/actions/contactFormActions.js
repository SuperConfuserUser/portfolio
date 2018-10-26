// ** Action Creators ** 
export const updateMessage = message => {
  return {
    type: 'UPDATED_CONTACT_FORM',
    message
  }
}

export const resetContactForm = () => {
  return {
    type: 'RESET_CONTACT_FORM'
  }
}

export const setSuccessResponse = response => {
  return {
    type: 'SET_SUCCESS_RESPONSE',
    response
  }
}

// ** Async Actions **
export const sendMessage = message => {
  return dispatch => {
    return fetch('/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
      .then(response => response.json())
      .then(message => 
        message.success ? 
          dispatch(setSuccessResponse(message.success)) :
          dispatch(updateMessage(message))
      )
      .catch(error => console.log('contact form error: ', error))
  }
}