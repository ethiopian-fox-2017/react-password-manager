import axios from 'axios'

export const fetchPasswords = () => {
  return dispatch =>
    axios.get(`http://localhost:4000/passwords`)
      .then(res => {
        dispatch({
          type: 'FETCH_PASSWORDS',
          payload: res.data
        })
      })

}

export const addPassword = password => {
  return dispatch =>
    axios.post(`http://localhost:4000/passwords`, password)
      .then(res => {
        dispatch({
          type: 'ADD_PASSWORD',
          payload: res.data,
        })
      })
}

export const editPassword = password => {
  return dispatch =>
    axios.put(`http://localhost:4000/passwords/${password.id}`, password)
      .then(res => {
        dispatch({
          type: 'EDIT_PASSWORD',
          payload: res.data,
        })
      })
}

export const deletePassword = id => {
  return dispatch =>
    axios.delete(`http://localhost:4000/passwords/${id}`)
      .then(res => {
        dispatch({
          type: 'DELETE_PASSWORD',
          payload: id
        })
      })
}