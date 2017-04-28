import { combineReducers } from 'redux';

import { passManager } from './passReducer';

const rootReducer = combineReducers({
  datas : passManager
})

export default rootReducer;
