import { FETCH_PASSWORD, ADD_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD } from './constants';

const fetchPasswordDone = products => ({ type: FETCH_PASSWORD, payload: products });

export const fetchPassword = () => (dispatch => fetch('http://localhost:3004/passManager')
    .then(res => res.json())
    .then(data => (dispatch(fetchPasswordDone(data))),
  ));
export const addPassword = newpassword =>({type:ADD_PASSWORD,payload:newpassword})
export const deletePassword = id =>({type:DELETE_PASSWORD,payload:id})
export const editPassword = newpassword =>({type:EDIT_PASSWORD,payload:newpassword})
