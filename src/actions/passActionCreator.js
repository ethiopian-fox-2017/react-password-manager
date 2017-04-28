export const getDatas = datas => ({
  type: 'GET_DATAS',
  datas: datas
})

export const fetchDatas = () => dispatch => {
  let url = 'http://localhost:4000/datas'
  fetch(url)
    .then(response => response.json())
    .then(datas => {
      dispatch(getDatas(datas))
    })
    .catch(err => { console.log(err.message )})
}
