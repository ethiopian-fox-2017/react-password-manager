import {
  fetchDataSuccess,
  addData,
  editData,
  deleteData,
  fetchData
} from './actions'

import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from './constants'

describe('Action test', () => {

  it('Should add data to state', () => {
    const payload = { username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: new Date() }
    const expectedAction = {
      type: ADD_DATA,
      payload
    }
    expect(addData(payload)).toEqual(expectedAction)
  })
})