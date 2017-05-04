import axios from 'axios';

import { GET_LIST, ADD_PASSWORD, EDIT_PASSWORD, DELETE_PASSWORD } from './constans';

export const getListSuccess = data => ({
  type: GET_LIST,
  payload: data,
});

export const editPasswordSuccess = data => ({
  type: EDIT_PASSWORD,
  payload: data,
});

export const addPasswordSuccess = data => ({
  type: ADD_PASSWORD,
  payload: data,
});

export const deletePasswordSuccess = data => ({
  type: DELETE_PASSWORD,
  payload: data,
});

export const getList = () => (
  dispatch => (
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => dispatch(getListSuccess(data)))
  )
);

export const editPassword = editData => (
    dispatch => (
      axios.put(`http://localhost:3004/users/${editData.id}`, editData)
           .then(res => dispatch(editPasswordSuccess(res.data)))
    )
);

export const deletePassword = id => (
  dispatch => (
    axios.delete(`http://localhost:3004/users/${id}`)
         .then(() => dispatch(deletePasswordSuccess(id)))
  )
);

export const addPassword = (state, newPass) => {
  const ids = state.map(pass => pass.id);
  const newId = Math.max(...ids) + 1;
  const theRealNewPass = {
    ...newPass,
    id: newId,
  };

  return (
    dispatch => (
      axios.post('http://localhost:3004/users', theRealNewPass)
      .then(res => dispatch(addPasswordSuccess(res.data)))
    )
  );
};
