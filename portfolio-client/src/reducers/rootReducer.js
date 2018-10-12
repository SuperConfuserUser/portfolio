import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'
import projectFormDataReducer from './projectFormDataReducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
  projectFormData: projectFormDataReducer
})

export default rootReducer