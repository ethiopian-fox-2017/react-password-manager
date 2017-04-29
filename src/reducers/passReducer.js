import { ADD_PASSWORD, REMOVE_PASSWORD, EDIT_PASSWORD } from '../actions/constants';

const initialState = [
  {
    id: 1,
    url: 'http://google.com/',
    username: 'John Google',
    password: 'google',
    createdAt: '4 Februari 2017',
    updatedAt: '17 April 2017',
  },
];

const addPassword = (state, newPass) => {
  const { url, username, password } = newPass.form;
  const ids = state.map((pass) => {
    if (pass.id !== undefined) {
      return pass.id;
    } else {
      return 1;
    }
  });
  const uniqueId = Math.max(...ids) + 1;
  const addedPass = {
    id: uniqueId,
    url,
    username,
    password,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  const newState = [...state, addedPass];
  return newState;
};

const removePassword = (state, passId) => {
  const newState = state.filter(password => password.id !== passId);
  return newState;
};

const editPassword = (state, editedPass) => {
  const editedState = state.map((password) => {
    if (password.id === editedPass.id) {
      return {
        ...password,
        url: editedPass.url,
        username: editedPass.username,
        password: editedPass.password,
      };
    }
    return password;
  });
  return editedState;
};

const passReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD: return addPassword(state, action.payload);
    case REMOVE_PASSWORD: return removePassword(state, action.payload);
    case EDIT_PASSWORD: return editPassword(state, action.payload);
    default: return state;
  }
};

export default passReducer;
