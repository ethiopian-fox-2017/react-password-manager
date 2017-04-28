import * as ActionTypes from '../actions/constants';

import passwordReducer from './passwordReducer';

describe('password reducer', () => {
  it('successfully adds new password', () => {
    const mockState = [
    {
      "id": 2,
      "url": "http://google.com/",
      "username": "jono",
      "password": "Doe12)",
      "createdAt": "2017-03-12",
      "updatedAt": "2017-03-12"
    },
    {
      "id": 3,
      "url": "http://facebook.com/",
      "username": "johns",
      "password": "Doe9!2",
      "createdAt": "2017-04-02",
      "updatedAt": "2017-04-02"
    }];

    const newData = {
      "url": "http://hacktiv8.com/",
      "username": "john",
      "password": "Doe90)",
      "createdAt": "2017-03-02",
      "updatedAt": "2017-03-02"
    };
    const actionCreator = {
      type: ActionTypes.ADD_DATA_SUCCESS,
      payload: newData
    };
    expect(passwordReducer(mockState, actionCreator)).toEqual([...mockState, newData]);
  });
})
