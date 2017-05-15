import { combineReducers } from 'redux';

import { passManager } from './passReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  datas : passManager,
  searchKeyword: searchReducer,
})

export default rootReducer;
