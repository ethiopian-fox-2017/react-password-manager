import { GET_LIST, ADD_PASSWORD, EDIT_PASSWORD, DELETE_PASSWORD } from '../actions/constans';

const initialState = [];

const editPass = (state, updatedPass) => {
  const newState = state.map((pass) => {
    if (pass.id === updatedPass.id) {
      return {
        ...pass,
        url: updatedPass.url,
        username: updatedPass.username,
        password: updatedPass.password,
        updatedAt: updatedPass.updatedAt,
      };
    }
    return pass;
  });

  return newState;
};

const deletePass = (state, id) => {
  const newState = state.filter(pass => pass.id !== id);
  return newState;
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST: {
      const newState = action.payload;
      return newState;
    }
    case ADD_PASSWORD: {
      const newState = [...state, action.payload];
      return newState;
    }
    case EDIT_PASSWORD: {
      const newState = editPass(state, action.payload);
      return newState;
    }
    case DELETE_PASSWORD: {
      const newState = deletePass(state, action.payload);
      return newState;
    }
    default: return state;

  }
};

export default passwordReducer;
