import { combineReducers } from 'redux';

import passwordReducer from './passwordReducer';

const rootReducer = combineReducers({
  passwordData: passwordReducer
});

export default rootReducer;
