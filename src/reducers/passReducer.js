import { GET_DATAS, ADD_DATA, DELETE_DATA, SEARCH_KEYWORD } from '../actions/constants';

const addData = (state, newData) => {
  let maxId = 0;
  const newURL = newData.url;
  const ids = state.map(data => data.id);
  if(state.length !== 0){
    maxId = Math.max(...ids);
  }
  const newId = maxId + 1;
  const createdAt = new Date();

  const data = {
    id: newId,
    url: newData.url,
    username: newData.username,
    password: newData.password,
    createdAt: createdAt.toISOString(),
    updatedAt: ''
  }

  const newState = [...state, data];
  return newState;
}

// DELETE state
const deleteData = (state, passId) => {
  const newState = state.filter(dataPass => dataPass.id !== passId);
  return newState
}

export const passManager = (state = [], action) => {
  switch(action.type) {
    case GET_DATAS: {
      return action.payload;
    }
    case ADD_DATA: {
      return addData(state, action.payload)
    }
    case DELETE_DATA: {
      return deleteData(state, action.payload)
    }
    default:
      return state
  }
}
