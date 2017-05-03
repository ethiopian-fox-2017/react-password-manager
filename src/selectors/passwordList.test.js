import { filterUrlsByKeywords } from './passwordList'

describe('selector', () => {

  test('selector', () => {
    expect(
      filterUrlsByKeywords([{
        url: 'test 1'
      },{
        url: 'test 2'
      },{
        url: 'dumb'
      }], 'test')
    ).toEqual(
      [{
        url: 'test 1'
      },{
        url: 'test 2'
      }]
    )
  })

})

// export const filterUrlsByKeywords = (state, keywords) => {
//   return state.filter(item => item.url.toLowerCase().includes(keywords.toLowerCase()))
// }