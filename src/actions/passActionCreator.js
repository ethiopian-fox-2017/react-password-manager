import axios from 'axios';

import { GET_DATAS, ADD_DATA, DELETE_DATA, SEARCH_KEYWORD } from './constants';

export const fetchDatas = () => dispatch => {
  console.log('testee -----');
  let url = 'http://localhost:4000/datas'
  axios.get(url)
      .then(res => dispatch(getDatas(res.data)))
  // kode cadangan
  // return (dispatch) =>
  //   fetch('http://localhost:4000/datas')
  //     .then(response => response.json())
  //     .then(datas => dispatch(getDatas(datas.results)))
}

export const getDatas = datas => ({
  type: GET_DATAS,
  payload: datas,
})

export const fetchAddData = newData => dispatch => {
  let url = 'http://localhost:4000/datas'
  const newDataToDate = {...newData, createdAt: new Date(), updatedAt: ''}
  console.log("=======",newData);
  axios.post(url, newDataToDate)
    .then(res => dispatch(addData(res.data)));
}

export const addData = newData => ({
  type: ADD_DATA,
  payload: newData
})

export const deleleteData = id => {
  let url = 'http://localhost:4000/datas'
  return dispatch => {
    axios.delete(`${url}/${id}`)
      .then(res => dispatch(deleteDataPass(id)))
  }
}

export const deleteDataPass = id => ({
  type: DELETE_DATA,
  payload: id,
})

export const searchKeyword = keyword => ({
  type: SEARCH_KEYWORD,
  payload: keyword,
})
