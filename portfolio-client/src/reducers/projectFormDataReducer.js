export default ( state = {
  name: '',
  img_url: '',
  description: ''
}, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.projectFormData

    default:
      return state
  }
}