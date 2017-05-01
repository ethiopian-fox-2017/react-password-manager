import { combineReducers } from 'redux'

import accountReducer from './accountReducer'
import loadingReducer from './loadingReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  account : accountReducer,
  loading : loadingReducer,
  search : searchReducer,
})

export default rootReducer
