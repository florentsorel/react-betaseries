import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}

const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose

const composerWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composerWithMiddleware
  )
}