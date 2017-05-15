import { getList } from './index';
import { GET_LIST } from './constans';

describe('actions', () => {
  it('should create an action to add a data', () => {
    const expectedAction = {
      type: GET_LIST,
      payload: { url: 'enak' },
    };
    expect(getList()).toEqual(expectedAction);
  });
});
