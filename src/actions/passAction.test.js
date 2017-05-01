import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { fetchPassword } from './passAction';
import { ADD_PASSWORD, REMOVE_PASSWORD, EDIT_PASSWORD, GET_PASSWORD } from './constants';

const mockStore = configureMockStore([thunk])

describe('Password Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handle success request', () => {
    const store = mockStore();
    fetchMock.get('http://localhost:1234/passwords', { password: ['google']});
    return store.dispatch(fetchPassword())
    .then(() => {
      expect(store.getActions()).toEqual([
        { payload: { password: ['google'] }, type: GET_PASSWORD },
      ]);
    });
  });

  it('handle failed request', () => {
    const store = mockStore();
    fetchMock.get('http://localhost:1234/passwords', 400);
    return store.dispatch(fetchPassword())
    .then(() => {
      expect(store.getActions()).toEqual([])
    })
  })

});
