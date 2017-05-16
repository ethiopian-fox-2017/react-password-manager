import { GET_PASSWORD, SAVE_PASSWORD, EDIT_PASSWORD, DELT_PASSWORD } from './constants'

export const getPassword = (passwordList) => {
  return {
    type: GET_PASSWORD,
    payload: passwordList,
  };
};

export const savePassword = (newItem) => {
  return {
    type: SAVE_PASSWORD,
    payload: newItem,
  };
};

export const editPassword = (updItem) => {
  return {
    type: EDIT_PASSWORD,
    payload: updItem,
  };
};

export const deletePassword = (itemId) => {
  return {
    type: DELT_PASSWORD,
    payload: itemId,
  };
};

export const fetchUserData = () => {
  return (dispatch) => {
    fetch('http://localhost:3004/users')
    .then(res => res.json())
    .then(data => dispatch(getPassword(data)))
  };
};

export const fetchSavePassword = (newUserData) => {
  const moment = require('moment');
  const timestamps = {
    'createdAt' : moment(),
    'updatedAt' : moment(),
  }
  return (dispatch) => {
    fetch('http://localhost:3004/users',
    {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(Object.assign(newUserData, timestamps))
    })
    .then(res => res.json())
    .then(data => dispatch(savePassword(data)))
  };
}
