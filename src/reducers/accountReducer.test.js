import reducer from './accountReducer'

describe('Testing for account reducer ', () => {
  test('should return initial state equal array empty', ()=>{
      expect(
        reducer(undefined,{})
      ).toEqual([])
  })
  test('should return data if entry new data', () => {
    expect(
      reducer([], {
        type : 'ADD_ACCOUNT_SUCCESS',
        payload :  {
            id : 0,
            username : 'ridhosaja',
            password : '123',
            url : 'https://localhost'
          }
      })
    ).toEqual([
      {
         id : 0,
         username : 'ridhosaja',
         password : '123',
         url : 'https://localhost'
       }
    ])
  })
})
