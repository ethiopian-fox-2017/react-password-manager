import axios from 'axios';

export const fetchDatas = () => dispatch => {
  let url = 'http://localhost:4000/datas'
  fetch(url)
    .then(response => response.json())
    .then(datas => {
      dispatch(getDatas(datas))
    })
    .catch(err => { console.log(err.message )})
}

export const getDatas = datas => ({
  type: 'GET_DATAS',
  datas: datas,
})

export const fetchAddData = newData => dispatch => {
  let url = 'http://localhost:4000/datas'
  const newDataToDate = {...newData, createdAt: new Date(), updatedAt: ''}
  axios.post(url, newDataToDate)
    .then(res => dispatch(addData(res.data)));
}

export const addData = newData => ({
  type: 'ADD_DATA',
  payload: newData
})
