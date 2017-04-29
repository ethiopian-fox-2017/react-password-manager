import axios from 'axios';

export const fetchDatas = () => dispatch => {
  console.log('test -----');
  let url = 'http://localhost:4000/datas'
  return
  fetch(url)
    .then(response =>
    {
      console.log('====----');
      return response.json()
    })
    .then(datas => {
      console.log('test222 -----');
      return dispatch(getDatas(datas))
    })
    .catch(err => { console.log(err.message )})

}

export const getDatas = datas => ({
  type: 'GET_DATAS',
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
  type: 'ADD_DATA',
  payload: newData
})
