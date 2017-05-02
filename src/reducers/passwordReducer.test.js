import { FETCH_DATA_SUCCESS, ADD_DATA_SUCCESS, DEL_DATA_SUCCESS, EDIT_DATA_SUCCESS } from '../actions/constants';

import passwordReducer from './passwordReducer';

const mockState = [];

describe('passwordReducer Testing', () => {
  it('successfully fetch data', () => {
    const data = {
      "id": 1,
      "url": "http://hacktiv8.com/",
      "username": "Bruce",
      "password": "Wayne@8",
      "createdAt": "2017-01-01",
      "updatedAt": "2017-01-01"
    };
    const actionCreator = {
      type: FETCH_DATA_SUCCESS,
      payload: data
    };
    expect(passwordReducer(mockState, actionCreator)).toEqual(data);
  })

  it('successfully adds new password', () => {
   const newData = {
     "id": 1,
     "url": "http://hacktiv8.com/",
     "username": "Bruce",
     "password": "Wayne@8",
     "createdAt": new Date().toISOString(),
     "updatedAt": ""
   };
   const actionCreator = {
     type: ADD_DATA_SUCCESS,
     payload: newData
   };
   expect(passwordReducer(mockState, actionCreator)).toEqual([...mockState, newData]);
   expect(passwordReducer(mockState, actionCreator)).toHaveLength(1);
  });

  it('successfully update password', () => {
   const editData = {
     "id": 1,
     "url": "http://hacktiv8.com/",
     "username": "Bruce",
     "password": "Wayne@7",
     "createdAt": "2017-04-02",
     "updatedAt": new Date().toISOString()
   };
   const actionCreator = {
     type: EDIT_DATA_SUCCESS,
     payload: editData
   };
   expect(passwordReducer(mockState, actionCreator)).toEqual(mockState.map( item => {
     if(item.id === editData.id) return editData;
     return item;
   }));
  });

  it('successfully delete password', () => {
   const deletedId = 1;
   const actionCreator = {
     type: DEL_DATA_SUCCESS,
     payload: deletedId
   };
   expect(passwordReducer(mockState, actionCreator)).toEqual(mockState.filter( item => item.id != deletedId));
   expect(passwordReducer(mockState, actionCreator)).toHaveLength(0);
  });

})
