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

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS: return fetchData(state, action.payload);
    case ActionTypes.ADD_DATA_SUCCESS: return addData(state, action.payload);
    default: return state;

  }

}

export default passwordReducer;
