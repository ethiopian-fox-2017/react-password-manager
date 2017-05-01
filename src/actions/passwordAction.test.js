import { FETCH_DATA_SUCCESS, ADD_DATA_SUCCESS, EDIT_DATA_SUCCESS, DEL_DATA_SUCCESS } from './constants';
import { fetchDataSuccess, addDataSuccess, editDataSuccess, delDataSuccess  } from './passwordAction';

describe('passwordAction Creator Testing', () => {
  it('FETCH_DATA_SUCCESS action creator works', () => {
   const mockData = [];
   const expectedAction = {
     type: FETCH_DATA_SUCCESS,
     payload: mockData
   };
   expect(fetchDataSuccess(mockData)).toEqual(expectedAction);
  });
  it('ADD_DATA_SUCCESS action creator works', () => {
   const mockData = {
     "id": 2,
     "url": "http://hacktiv8.com/",
     "username": "Laksono",
     "password": "Admin@1",
     "createdAt": "2017-01-01",
     "updatedAt": "2017-01-01"
   };
   const expectedAction = {
     type: ADD_DATA_SUCCESS,
     payload: mockData
   };
   expect(addDataSuccess(mockData)).toEqual(expectedAction);
  });
  it('EDIT_DATA_SUCCESS action creator works', () => {
   const mockData = {
     "id": 2,
     "url": "http://hacktiv8.com/",
     "username": "Laksono",
     "password": "Admin@2",
     "createdAt": "2017-01-01",
     "updatedAt": "2017-01-01"
   };
   const expectedAction = {
     type: EDIT_DATA_SUCCESS,
     payload: mockData
   };
   expect(editDataSuccess(mockData)).toEqual(expectedAction);
  });

  it('DEL_DATA_SUCCESS action creator works', () => {
   const mockData = 2;
   const expectedAction = {
     type: DEL_DATA_SUCCESS,
     payload: mockData
   };
   expect(delDataSuccess(mockData)).toEqual(expectedAction);
  });
});
