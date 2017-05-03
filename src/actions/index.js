import { SAVE_PASSWORD, EDIT_PASSWORD, DELT_PASSWORD } from './constants'

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
