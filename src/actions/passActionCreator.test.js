import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actions from './passActionCreator';

const middleware = [ thunk ]
const mockStore = configureMockStore(middleware)

describe('Test get data pass manager', () => {

  test('Get FETCH DATA when fetching done', async () => {
    let url = 'http://localhost:4000/datas'
    let payload = await fetch(url)
      .then(response => response.json())
      .then(datas => {
        return datas
      })

      let expectedActions = [{
        type: 'GET_DATAS',
        payload
      }]

      const store = mockStore()

      return store.dispatch(actions.fetchDatas())
        .then(() => {
          expect(store.getActions().toEqual(expectedActions))
        })
  })

})
