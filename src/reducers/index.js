import { combineReducers } from 'redux'

import profileReducer from './profileReducer'

const mainReducer = combineReducers({
  myProfile: profileReducer
})

export default mainReducer;
