import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'
import projectReducer from './projectReducer'
import projectFormDataReducer from './projectFormDataReducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  projectFormData: projectFormDataReducer
})

export default rootReducer