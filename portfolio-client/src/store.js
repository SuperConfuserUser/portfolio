import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)