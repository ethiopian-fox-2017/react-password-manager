import { FETCH_DATA_SUCCESS, ADD_DATA_SUCCESS, DEL_DATA_SUCCESS, EDIT_DATA_SUCCESS } from '../actions/constants';

const initialState = []

const fetchData = (state, data) => {
  return data;
}

const addData = (state, newData) => {
  let maxId = 0;
  const newURL = newData.url;
  const newUsername = newData.username;
  const newPassword = newData.password;
  const ids = state.map(data => data.id);
  if(state.length !== 0){
    maxId = Math.max(...ids);
  }
  const newId = maxId + 1;
  const createdAt = new Date();
  const data = {
    id: newId,
    url: newURL,
    username: newUsername,
    password: newPassword,
    createdAt: createdAt.toISOString(),
    updatedAt: ''
  }
  const newState = [...state, data];
  return newState;
}

const delData = (state, id) => {
  const newState = state.filter(data => data.id !== id);
  return newState;
};

const editData = (state, updatedData) => {
  console.log(updatedData);
  const createdAt = new Date();
  const newState = state.map(data => {
    if (data.id === updatedData.id) {
      return {
        id: data.id,
        url: updatedData.url,
        username: updatedData.username,
        password: updatedData.password,
        createdAt: data.createdAt,
        updatedAt: createdAt.toISOString()
      };
    }
    return data;
  });
  return newState;
}

const passwordReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DATA_SUCCESS: return fetchData(state, action.payload);
    case ADD_DATA_SUCCESS: return addData(state, action.payload);
    case DEL_DATA_SUCCESS: return delData(state, action.payload);
    case EDIT_DATA_SUCCESS: return editData(state, action.payload);
    default: return state;
  }
}

export default passwordReducer;
