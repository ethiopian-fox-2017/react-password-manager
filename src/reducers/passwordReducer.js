const fetchPasswords = (passwords) => {
  let newState = [...passwords]
  return newState
}

const addPassword = (state, password) => {
  let newState = [...state, password]
  return newState
}

const editPassword = (state, updated) => {
  let newState = state.map(password => password.id === updated.id ? updated : password)
  return newState
}

const deletePassword = (state, id) => {
  let newState = state.filter(password => password.id !== id)
  return newState
}

const passswordReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PASSWORDS': return fetchPasswords(action.payload)
    case 'ADD_PASSWORD': return addPassword(state, action.payload)
    case 'EDIT_PASSWORD': return editPassword(state, action.payload)
    case 'DELETE_PASSWORD': return deletePassword(state, action.payload)
    default: return state
  }
}

export default passswordReducer