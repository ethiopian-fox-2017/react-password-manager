import { combineReducers } from 'redux';
import passReducer from './passReducer';

const rootReducer = combineReducers({
  passwords: passReducer,
});

export default rootReducer;
