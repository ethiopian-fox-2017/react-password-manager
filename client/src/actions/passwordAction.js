import { FETCH_PASSWORD, ADD_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD } from './constants';

export const fetchPasswordDone = passwords => ({ type: FETCH_PASSWORD, payload: passwords });

export const fetchPassword = () => (dispatch => fetch('http://localhost:3004/passManager')
    .then(res => res.json())
    .then(data => (dispatch(fetchPasswordDone(data)))
  ).catch(err=>{console.log(err);})
);
export const addPassword = newpassword =>({type:ADD_PASSWORD,payload:newpassword})
export const deletePassword = id =>({type:DELETE_PASSWORD,payload:id})
export const editPassword = newpassword =>({type:EDIT_PASSWORD,payload:newpassword})
