import { ADD_PASSWORD, REMOVE_PASSWORD, EDIT_PASSWORD, GET_PASSWORD } from './constants';

export const addPassword = newPass => ({
  type: ADD_PASSWORD,
  payload: newPass,
});

export const addRequest = newPass => (
  dispatch =>
  fetch('http://localhost:1234/passwords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPass),
  })
  .then(res => res.json())
  .then(data => dispatch(addPassword(data)))
  .catch(err => console.log(err.message))
);


export const removePassword = passId => ({
  type: REMOVE_PASSWORD,
  payload: passId,
});

export const removeRequest = passId => (
  dispatch =>
  fetch(`http://localhost:1234/passwords/${passId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => dispatch(removePassword(data)))
  .catch(err => console.log(err.message))
);

export const editPassword = editedPass => ({
  type: EDIT_PASSWORD,
  payload: editedPass,
});

export const editRequest = editedPass => (
  dispatch =>
  fetch(`http://localhost:1234/passwords/${editedPass.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedPass),
  })
  .then(res => res.json())
  .then(data => dispatch(editPassword(data)))
  .catch(err => console.log(err.message))
);

export const getPassword = passwords => ({
  type: GET_PASSWORD,
  payload: passwords,
});

export const fetchPassword = () => (
   dispatch =>
    fetch('http://localhost:1234/passwords')
    .then(res => res.json())
    .then(data => dispatch(getPassword(data)))
    .catch(err => console.log(err.message))
);
