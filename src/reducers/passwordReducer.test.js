import * as ActionTypes from '../actions/constants';

import passwordReducer from './passwordReducer';

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

describe('password reducer', () => {
  it('successfully adds new password', () => {

    const newData = {
      "id": 4,
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
  it('successfully update password', () => {

    const editData = {
      "id": 3,
      "url": "http://facebook.com/",
      "username": "johna",
      "password": "Doe9!1",
      "createdAt": "2017-04-02",
      "updatedAt": "2017-04-02"
    };
    const actionCreator = {
      type: ActionTypes.UPDATE_DATA_SUCCESS,
      payload: editData
    };
    expect(passwordReducer(mockState, actionCreator)).toEqual(mockState.map( item => {
      if(item.id === editData.id) return editData;
      return item;
    }));
  });
  it('successfully delete password', () => {

    const deletedId = 3;
    const actionCreator = {
      type: ActionTypes.DELETE_DATA_SUCCESS,
      payload: deletedId
    };
    expect(passwordReducer(mockState, actionCreator)).toEqual(mockState.filter( item => item.id != deletedId));
  });
})
