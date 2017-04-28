import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

import passwordReducer from '../reducers/passwordReducer'

const middlewares = applyMiddleware(thunk)
const store = createStore(passwordReducer, middlewares)

export default store