import { GET_LIST, ADD_PASSWORD } from './constans';
import axios from 'axios';

export const getListSuccess = data => ({
  type: GET_LIST,
  payload: data,
});

export const addPasswordSuccess = data => ({
  type: ADD_PASSWORD,
  payload: data,
});

export const getList = () => (
  dispatch => (
    fetch('http://localhost:3004/users')
      .then(res => res.json())
      .then(data => dispatch(getListSuccess(data)))
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
      .catch((err) => { console.log(err); })
    )
  );
};
