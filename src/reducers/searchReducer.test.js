import { SET_SEARCH_KEYWORD } from '../actions/constants';
import searchReducer from './searchReducer';

describe('searchReducer', () => {
  it('should update searchKeyword', () => {
    const mockState = '';
    const newKeyword = 'facebook';
    const actionCreator = {
      type: SET_SEARCH_KEYWORD,
      payload: newKeyword
    };
    expect(searchReducer(mockState, actionCreator)).toEqual(newKeyword);
  })
})
