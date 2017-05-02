import { SET_SEARCH_KEYWORD } from '../actions/constants';

import searchReducer from './searchReducer';

describe('searchReducer Testing', () => {
  it('successfully return list of data that match with the searchKeyword', () => {
   const mockState = '';
   const newKeyword = 'hacktiv8';
   const actionCreator = {
     type: SET_SEARCH_KEYWORD,
     payload: newKeyword
   };
   expect(searchReducer(mockState, actionCreator)).toEqual(newKeyword);
  })
})
