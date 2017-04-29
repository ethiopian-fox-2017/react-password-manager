import { combineReducers } from 'redux';

import PasswordReducer from './passwordReducer';
import SearchReducer from './searchReducer';

const RootReducer = combineReducers({
  passwords: PasswordReducer,
  searchKey: SearchReducer
});

export default RootReducer;
