import * as ActionTypes from '../actions/constants';

const initialState = [];

const fetchData = (state, data) => {
  // const newState = [...state, data];
  return data;
}

const addData = (state, data) => {
  const newState = [...state, data];
  return newState;
}

const deleteData = (state, deletedId) => {
  const newState = state.filter(item => item.id !== deletedId);
  return newState;
}

const updateData = (state, updatedItem) => {
  const newState = state.map(item => {
    if(item.id === updatedItem.id){
      return {
        ...item,
        url: updatedItem.url,
        username: updatedItem.username,
        password: updatedItem.password,
        updatedAt: updatedItem.updatedAt
      }
    }
    return item;
  })
  return newState;
}

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS: return fetchData(state, action.payload);
    case ActionTypes.ADD_DATA_SUCCESS: return addData(state, action.payload);
    case ActionTypes.UPDATE_DATA_SUCCESS: return updateData(state, action.payload);
    case ActionTypes.DELETE_DATA_SUCCESS: return deleteData(state, action.payload);
    default: return state;

  }

}

export default passwordReducer;
