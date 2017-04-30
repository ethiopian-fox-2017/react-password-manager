import * as ActionTypes from './constants';
import { fetchDataSuccess, addDataSuccess, updateDataSuccess, deleteDataSuccess  } from './passwordAction';

describe('actions creator for password', () => {
  it('fetch data success action creator works', () => {
    const mockData = [];
    const expected = {
      type: ActionTypes.FETCH_DATA_SUCCESS,
      payload: mockData
    };
    expect(fetchDataSuccess(mockData)).toEqual(expected);
  });
  it('add data success action creator works', () => {
    const mockData = {
      "id": 2,
      "url": "http://google.com/",
      "username": "johno",
      "password": "Doe9!3",
      "createdAt": "2017-04-02",
      "updatedAt": "2017-04-02"
    };
    const expected = {
      type: ActionTypes.ADD_DATA_SUCCESS,
      payload: mockData
    };
    expect(addDataSuccess(mockData)).toEqual(expected);
  });
  it('update data success action creator works', () => {
    const mockData = {
      "id": 2,
      "url": "http://google.com/",
      "username": "johno",
      "password": "Doe9!3",
      "createdAt": "2017-04-02",
      "updatedAt": "2017-04-02"
    };
    const expected = {
      type: ActionTypes.UPDATE_DATA_SUCCESS,
      payload: mockData
    };
    expect(updateDataSuccess(mockData)).toEqual(expected);
  });

  it('delete data success action creator works', () => {
    const mockData = 2;
    const expected = {
      type: ActionTypes.DELETE_DATA_SUCCESS,
      payload: mockData
    };
    expect(deleteDataSuccess(mockData)).toEqual(expected);
  });
});
