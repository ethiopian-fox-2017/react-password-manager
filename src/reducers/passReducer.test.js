import { GET_PASSWORD } from '../actions/constants';

import passReducer from './passReducer';

describe('Password Reducer', () => {
  it('should display empty array as an initial state', () => {
    const action = { type: 'unknown' };
    const newState = passReducer(undefined, action)
    expect(newState).toEqual([]);
  });
});

describe('on loaded data', () => {
  it('should return all the passwords data from database', () => {
    const action = {
      type: GET_PASSWORD,
      payload: { payloadKey: 'payloadVal' }
    };
    const newState = passReducer(undefined, action);
    expect(newState).toEqual(action.payload);
  });
});
