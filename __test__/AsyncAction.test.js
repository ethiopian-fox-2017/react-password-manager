import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { fetchData, addData } from '../src/actions'
import * as types from '../src/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Async actions test', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  it('FETCH_DATA_SUCCESS should be created after fetch data action', () => {

    const payload = { id: 4, username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: new Date().toISOString(), updatedAt: '' }

    nock('http://localhost:3000')
      .get('/users')
      .reply(200, payload)

    const expectedAction = [{
      type: types.FETCH_DATA_SUCCESS,
      payload
    }]

    const store = mockStore()

    store.dispatch(fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it('ADD_DATA should be created from addData action', () => {

    const payload = { username: 'testing', password: 'testing', url: 'http://www.url.com', createdAt: new Date().toISOString(), updatedAt: '' }

    nock('http://localhost:3000')
      .filteringPath(() => '/users')
      .post('/users', payload)
      .reply(200)

    const expectedAction = [{
      type: types.ADD_DATA,
      payload
    }]

    const store = mockStore()

    store.dispatch(addData(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

})