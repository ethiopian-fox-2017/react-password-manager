import { SET_SEARCH_KEYWORD } from './constants';
import { setSearchKeyword } from './searchAction'

describe('searchAction Creator Testing', () => {
  it('SET_SEARCH_KEYWORD action creator works', ()=> {
   const mockData = 'google';
   const expected = {
     type: SET_SEARCH_KEYWORD,
     payload: mockData
   };
   expect(setSearchKeyword(mockData)).toEqual(expected);
  })
})
