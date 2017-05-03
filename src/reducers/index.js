import { combineReducers } from 'redux'

import passwordReducer from './passwordReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  passwords: passwordReducer,
  search: searchReducer,
})

export default rootReducer