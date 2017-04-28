import * as ActionTypes from './constants';
import { fetchDataSuccess, fetchData } from './passwordAction';

describe('actions creator for password', () => {
  it('fetch data success action creator works', () => {
    const mockData = [];
    const expected = {
      type: ActionTypes.FETCH_DATA_SUCCESS,
      payload: mockData
    };
    expect(fetchDataSuccess(mockData)).toEqual(expected);
  });
});
