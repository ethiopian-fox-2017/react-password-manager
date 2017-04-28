import {
  fetchDataSuccess,
  addData,
  editData,
  deleteData
} from './actions'

import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from './constants'

describe('Action test', () => {

  it('Should add 1 data', () => {
    const payload = { id: 4, username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: new Date() }
    const expectedAction = {
      type: ADD_DATA,
      payload
    }
    expect(addData(payload)).toEqual(expectedAction)
  })

  it('Should delete 1 data with ID = 1', () => {
    const payload = 1
    const expectedAction = {
      type: DELETE_DATA,
      payload
    }
    expect(deleteData(payload)).toEqual(expectedAction)
  })

  it('Should success fetch data', () => {
    const expectedAction = {
      type: FETCH_DATA_SUCCESS,
      payload: []
    }
    expect(fetchDataSuccess([])).toEqual(expectedAction)
  })

  it('Should edit username data with ID 1', ()=> {
    const payload = { id: 1, username: 'changed'}
    const expectedAction = {
      type: EDIT_DATA,
      payload
    }
    expect(editData(payload)).toEqual(expectedAction)
  })
})