import dataReducer from './reducers/pwReducer'

import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from './constants'

describe('Reducer test', () => {

  it('Should return initial state', () => {
    expect(dataReducer(undefined, {})).toEqual([])
  })

  it('Should return new state from addData', () => {
    const payload = {
      username: 'testing',
      password: 'testing',
      url: 'http://www.url.com'
    }
    expect(dataReducer([{ id: 1, username: 'testing', password: 'testing', url: 'http://www.url.com'}], {
      type: ADD_DATA,
      payload
    })).toEqual([
      { id: 1, username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: '', updatedAt: '' },
      { id: 2, username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: '', updatedAt: '' }
    ])
  })

  it('Should return new state from editData, ID = 1', () => {
    const payload = {
      id: 1,
      username: 'changed'
    }
    expect(dataReducer([{
      id: 1,
      username: 'testing',
      password: 'testing',
      url: 'http://www.url.com',
      createdAt: '01-01-2000',
      updatedAt: ''
    }], {
      type: EDIT_DATA,
      payload
    })).toEqual([{
      id: 1,
      username: 'changed',
      password: 'testing',
      url: 'http://www.url.com',
      createdAt: '01-01-2000',
      updatedAt: ''
    }])
  })
})