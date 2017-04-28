import passwordReducer from './passwordReducer';

describe('pasword reducer', () => {
  it('should return the initial state', () => {
    expect(
      passwordReducer(undefined, {}),
    ).toEqual([]);
  });
});
