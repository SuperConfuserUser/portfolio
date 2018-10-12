export default (state = [], action) => {
  switch(action.type) {

    case 'GET_PROJECTS_SUCCESS':
      return action.projects

    case 'CREATE_PROJECT_SUCCESS':
      return state.concat(action.project)

    default:
      return state
  }
}