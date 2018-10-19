import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['admin']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
