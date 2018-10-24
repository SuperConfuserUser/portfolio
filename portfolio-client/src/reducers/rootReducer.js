import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import projectsReducer from './projectsReducer'
import projectReducer from './projectReducer'
import projectFormDataReducer from './projectFormDataReducer'
import contactFormDataReducer from './contactFormDataReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  projects: projectsReducer,
  project: projectReducer,
  projectFormData: projectFormDataReducer,
  contactFormData: contactFormDataReducer
})

export default rootReducer