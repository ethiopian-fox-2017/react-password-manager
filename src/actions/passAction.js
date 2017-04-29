import { ADD_PASSWORD, REMOVE_PASSWORD, EDIT_PASSWORD } from './constants';

export const addPassword = newPass => ({
  type: ADD_PASSWORD,
  payload: newPass,
});

export const removePassword = passId => ({
  type: REMOVE_PASSWORD,
  payload: passId,
});

export const editPassword = editedPass => ({
  type: EDIT_PASSWORD,
  payload: editedPass,
});
