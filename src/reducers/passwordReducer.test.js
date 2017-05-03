import passwordReducer from './passwordReducer'

describe('passwordReducer', () => {

  test('should return the initial state', () => {
    expect(
      passwordReducer(undefined, {})
    ).toEqual(
      []
    )
  })

  test('should handle FETCH_PASSWORDS', () => {
    expect(
      passwordReducer([], {
        type: 'FETCH_PASSWORDS',
        payload: [{
          url: 'url',
          username: 'username',
          password: 'password',
        }]
      })
    ).toEqual(
      [{
        url: 'url',
        username: 'username',
        password: 'password',
      }]
    )
  })

  test('should handle ADD_PASSWORD', () => {
    expect(
      passwordReducer([], {
        type: 'ADD_PASSWORD',
        payload: {
          id: 0,
          url: 'url',
          username: 'username',
          password: 'password',
        }
      })
    ).toEqual(
      [{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      }]
    )

    expect(
      passwordReducer([{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      }], {
        type: 'ADD_PASSWORD',
        payload: {
          id: 1,
          url: 'url',
          username: 'username',
          password: 'password',
        }
      })
    ).toEqual(
      [{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      },{
        id: 1,
        url: 'url',
        username: 'username',
        password: 'password',
      }]
    )
  })

  test('should handle EDIT_PASSWORD', () => {
    expect(
      passwordReducer([{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      }], {
        type: 'EDIT_PASSWORD',
        payload: {
          id: 0,
          url: 'edited',
          username: 'edited',
          password: 'edited',
        }
      })
    ).toEqual(
      [{
        id: 0,
        url: 'edited',
        username: 'edited',
        password: 'edited',
      }]
    )

    expect(
      passwordReducer([{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      },{
        id: 1,
        url: 'url',
        username: 'username',
        password: 'password',
      }], {
        type: 'EDIT_PASSWORD',
        payload: {
          id: 1,
          url: 'edited',
          username: 'edited',
          password: 'edited',
        }
      })
    ).toEqual(
      [{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      },{
        id: 1,
        url: 'edited',
        username: 'edited',
        password: 'edited',
      }]
    )
  })

  test('should handle DELETE_PASSWORD', () => {
    expect(
      passwordReducer([{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      }], {
        type: 'DELETE_PASSWORD',
        payload: 0
      })
    ).toEqual(
      []
    )

    expect(
      passwordReducer([{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      },{
        id: 1,
        url: 'url',
        username: 'username',
        password: 'password',
      }], {
        type: 'DELETE_PASSWORD',
        payload: 1
      })
    ).toEqual(
      [{
        id: 0,
        url: 'url',
        username: 'username',
        password: 'password',
      }]
    )
  })

})