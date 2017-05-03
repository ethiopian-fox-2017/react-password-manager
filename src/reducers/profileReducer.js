import { SAVE_PASSWORD, EDIT_PASSWORD, DELT_PASSWORD } from '../actions/constants';
const initialState = [
  {id: 1, url: 'www.google.com', username: 'admin', password: '12345'},
  {id: 2, url: 'www.facebook.com', username: 'admin', password: '12345'},
]

const savePassword = (state, newItem) => {
  const { url, username, password } = newItem;
  const ids = state.map(post => post.id);
  const newId = Math.max(...ids) + 1;
  const post = {
    id: newId,
    url,
    username,
    password,
  };
  const newState = [...state, post];
  return newState;
}

const editPassword = (state, updItem) => {
  const newState = state.map(item => {
    if(item.id === updItem.editForm.id){
      return {
        ...item,
        url: updItem.editForm.url,
        username: updItem.editForm.username,
        password: updItem.editForm.password,
      };
    }
    return item;
  });
  return newState;
}

const deletePassword = (state,itemId) => {
  const newState = state.filter(item => {
    return item.id !== itemId;
  })
  return newState;
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PASSWORD: return savePassword(state, action.payload)
    case EDIT_PASSWORD: return editPassword(state, action.payload)
    case DELT_PASSWORD: return deletePassword(state, action.payload)
    default: return state
  }
}

export default profileReducer
