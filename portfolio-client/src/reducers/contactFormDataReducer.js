const initialState = {
  successResponse: '',
  message: {
    name: '',
    email: '',
    subject: '',
    body: '',
    copy: false,
    errors: {}
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'UPDATED_CONTACT_FORM':
    return {...state, message: action.message}

  case 'SET_SUCCESS_RESPONSE':
    return {...state, successResponse: action.response}

  case 'RESET_CONTACT_FORM':
    return initialState

  default:
    return state
  }
}
