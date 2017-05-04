import { combineReducers } from 'redux'

import pwReducer from './pwReducer'

const reducers = combineReducers({
  data: pwReducer
})

export default reducers