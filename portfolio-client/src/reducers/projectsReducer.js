export default (state = [], action) => {
  switch(action.type) {
  
    case 'GET_PROJECTS_SUCCESS':
      return action.projects

    case 'CREATE_PROJECT_SUCCESS':
      return state.concat(action.project)

    case 'UPDATE_PROJECT_SUCCESS':
      const index = state.findIndex(project => project.id === action.project.id)
      const updatedState = [...state]
      updatedState[index] = action.project
      return updatedState

    case 'DELETE_PROJECT_SUCCESS':
      return state.filter(project => project.id !== action.id)

    default:
      return state
  }
}