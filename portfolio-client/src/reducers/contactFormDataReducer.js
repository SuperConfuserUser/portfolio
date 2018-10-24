const initialState = {
  name: '',
  email: '',
  subject: '',
  body: '',
  copy: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'UPDATED_CONTACT_FORM':
    return action.message

  case 'RESET_CONTACT_FORM':
    return initialState

  default:
    return state
  }
}
