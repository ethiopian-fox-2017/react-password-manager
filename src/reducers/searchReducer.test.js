import searchReducer from './searchReducer'

describe('searchReducer', () => {

  test('should return the initial state', () => {
    expect(
      searchReducer(undefined, {})
    ).toEqual(
      ''
    )
  })

  test('should handle SEARCH_KEYWORDS', () => {
    expect(
      searchReducer('', {
        type: 'SEARCH_KEYWORDS',
        payload: 'test'
      })
    ).toEqual(
      'test'
    )
  })

})