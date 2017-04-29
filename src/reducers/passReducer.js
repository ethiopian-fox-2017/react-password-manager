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

export const passManager = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATAS': {
      return action.payload;
    }
    case 'ADD_DATA': {
      return addData(state, action.payload)
    }
    default:
      return state
  }
}
