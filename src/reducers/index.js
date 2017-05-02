import { combineReducers } from 'redux';

import passwordReducer from './passwordReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  passwords: passwordReducer,
  searchKeyword: searchReducer,
});

export default rootReducer;
