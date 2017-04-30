import { combineReducers } from 'redux';

import passwordReducer from './passwordReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  passwordData: passwordReducer,
  searchKeyword: searchReducer
});

export default rootReducer;
