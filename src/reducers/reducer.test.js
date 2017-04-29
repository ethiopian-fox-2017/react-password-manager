import { GET_LIST, ADD_PASSWORD } from '../actions/constans';
import passwordReducer from './passwordReducer';

describe('pasword reducer', () => {
  it('should return the initial state', () => {
    expect(
      passwordReducer(undefined, {}),
    ).toEqual([]);
  });
  it('test Get should return the expected state', () => {
    const expectedAction = {
      type: GET_LIST,
      payload: { url: 'enak' },
    };
    expect(
      passwordReducer(undefined, expectedAction),
    ).toEqual({ url: 'enak' });
  });
  it('test Add should return the expected state', () => {
    const expectedAction = {
      type: ADD_PASSWORD,
      payload: { url: 'enak' },
    };
    expect(
      passwordReducer(undefined, expectedAction),
    ).toEqual([{ url: 'enak' }]);
  });
});
