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
    const dummy = {
      id: 2,
      username: 'testing',
      password: 'testing',
      url: 'http://www.web.com',
      createdAt: new Date().toISOString(),
      updatedAt: ''
    }
    expect(dataReducer([{id:1}], {
      type: ADD_DATA,
      dummy
    })).toEqual([{id:1},dummy])
  })

  it('Should return new state from editData, ID = 1', () => {
    const dummy = {
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
      dummy
    })).toEqual([{
      id: 1,
      username: 'changed',
      password: 'testing',
      url: 'http://www.url.com',
      createdAt: '01-01-2000',
      updatedAt: new Date().toISOString()
    }])
  })
})