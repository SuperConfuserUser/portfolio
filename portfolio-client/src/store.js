import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import projectsReducer from './reducers/projectsReducer'

const reducers = combineReducers({
  projects: projectsReducer
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)