import { combineReducers } from 'redux';
import passReducer from './passReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  passwords: passReducer,
  search: searchReducer,
});

export default rootReducer;
