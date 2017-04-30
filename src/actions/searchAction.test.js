import * as ActionTypes from './constants';
import { setSearchKeyword } from './searchAction'

describe('actions creator for search', () => {
  it('update searchKeyword action creator works', ()=> {
    const mockData = 'google';
    const expected = {
      type: ActionTypes.SET_SEARCH_KEYWORD,
      payload: mockData
    };
    expect(setSearchKeyword(mockData)).toEqual(expected);
  })
})
