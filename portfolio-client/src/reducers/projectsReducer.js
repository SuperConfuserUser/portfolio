export default (state = [], action) => {
  switch(action.type) {

    case 'GET_PROJECTS_SUCCESS':
      return action.projects

    default:
      return state
  }
}