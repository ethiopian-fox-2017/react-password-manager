import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import passwordReducer from '../reducers/passwordReducer';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(passwordReducer, middleware);

export default store;
