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

  it('Should fetch data from json server', () => {
    const payload = {
      id: 1,
      url: 'http://www.webs.com',
      username: 'changed',
      password: 'testing',
      createdAt: '01-01-2000',
      updatedAt: ''
    }
    expect(dataReducer([], {
      type: FETCH_DATA_SUCCESS,
      payload
    })).toEqual(payload)
  })

  it('Should return new state from addData', () => {
    const payload = {
      url: 'http://www.web.com',
      username: 'testing',
      password: 'testing',
      createdAt: new Date().toISOString(),
      updatedAt: ''
    }
    expect(dataReducer([], {
      type: ADD_DATA,
      payload
    })).toEqual([{...payload, id: 1}])
  })

  it('Should return new state from editData, ID = 1', () => {
    const payload = {
      id: 1,
      url: 'http://www.webs.com',
      username: 'changed',
      password: 'testing',
      createdAt: '01-01-2000',
      updatedAt: ''
    }
    expect(dataReducer([{
      id: 1,
      url: 'http://www.webs.com',
      username: 'testing',
      password: 'testing',
      createdAt: '01-01-2000',
      updatedAt: ''
    }], {
      type: EDIT_DATA,
      payload
    })).toEqual([{
      id: 1,
      url: 'http://www.webs.com',
      username: 'changed',
      password: 'testing',
      createdAt: '01-01-2000',
      updatedAt: new Date().toISOString()
    }])
  })

  it('Should delete 1 data, ID = 1', () => {
    const id = 1
    const data = {
      id: 1,
      url: 'http://www.webs.com',
      username: 'changed',
      password: 'testing',
      createdAt: '01-01-2000',
      updatedAt: ''
    }
    expect(dataReducer([data], {
      type: DELETE_DATA,
      id
    })).toEqual([data].filter(each => each.id !== id))
  })
})