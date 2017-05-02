import axios from 'axios';
import { SERVER_URL, FETCH_DATA_SUCCESS, ADD_DATA_SUCCESS, DEL_DATA_SUCCESS, EDIT_DATA_SUCCESS } from './constants';

//////////////// FETCH DATA ////////////////
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

export const fetchData = () => {
  return (dispatch) => {
    axios.get(`${SERVER_URL}/passwordsave`)
    .then(res => dispatch(fetchDataSuccess(res.data)));
  }
}


//////////////// ADD DATA ////////////////
export const addDataSuccess = (newData) => ({
  type: ADD_DATA_SUCCESS,
  payload: newData
})

export const addData = (newData) => {
  const newDataWithDate = { ...newData, createdAt: new Date(), updatedAt: ''  }
  return (dispatch) => {
    axios.post(`${SERVER_URL}/passwordsave`, newDataWithDate)
    .then(res => dispatch(addDataSuccess(res.data)));
  }
}


//////////////// DELETE DATA ////////////////
export const delDataSuccess = (id) => ({
  type: DEL_DATA_SUCCESS,
  payload: id
})

export const delData = (id) => {
  return (dispatch) => {
    axios.delete(`${SERVER_URL}/passwordsave/${id}`)
    .then(res => dispatch(delDataSuccess(id)));
  }
}


//////////////// EDIT DATA ////////////////
export const editDataSuccess = data => ({
  type: EDIT_DATA_SUCCESS,
  payload: data,
});

export const editData = (newData) => {
  const newDataWithDate = {
    id: newData.id,
    url: newData.url,
    username: newData.username,
    password: newData.password,
    createdAt: newData.createdAt,
    updatedAt: new Date()
  }
  return (dispatch) => {
    axios.put(`${SERVER_URL}/passwordsave/${newData.id}`, newDataWithDate)
    .then(res => dispatch(editDataSuccess(res.data)));
  }
}
