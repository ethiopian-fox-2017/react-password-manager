import { SEARCH_KEYWORD } from './constants';

export const searchKeyword = keyword => ({
  type: SEARCH_KEYWORD,
  payload: keyword,
});
