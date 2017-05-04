import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from '../constants'

const addData = (state, payload) => {
  let newId
  if(state.length !== 0) {
    newId = state[state.length-1].id + 1
  } else {
    newId = 1
  }

  const newData = {
    id: newId,
    url: payload.url,
    username: payload.username,
    password: payload.password,
    createdAt: payload.createdAt,
    updatedAt: ''
  }
  const newState = [...state, newData]
  return newState
}

const deleteData = (state, id) => {
  const newState = state.filter(each => each.id !== id)
  return newState
}

const editData = (state, payload) => {
  const newState = state.map((each) => {
    if(each.id === payload.id) {
      return {
        id: payload.id,
        url: payload.url,
        username: payload.username,
        password: payload.password,
        createdAt: payload.createdAt,
        updatedAt: payload.updatedAt
      }
    }
    return each
  })
  return newState
}

const dataReducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS: return action.payload
  case ADD_DATA: return addData(state, action.payload)
  case DELETE_DATA: return deleteData(state, action.id)
  case EDIT_DATA: return editData(state, action.payload)
  default: return state
  }
}

export default dataReducer