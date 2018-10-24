// ** Action Creators ** 
export const updateContactFormData = message => {
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
      .then(({ message }) => message)
      .catch(({ error }) => console.log(error))
  }
}