import axios from 'axios'

export const fetchPasswords = () => {
  function test() {
    return true
  }

  return dispatch =>
    axios.get(`http://localhost:4000/passwords`)
      .then(res => {
        return dispatch({
          type: 'FETCH_PASSWORDS',
          payload: res.data
        })
      })
}

export const addPassword = password => {
  return dispatch =>
    axios.post(`http://localhost:4000/passwords`, password)
      .then(res => {
        return dispatch({
          type: 'ADD_PASSWORD',
          payload: res.data,
        })
      })
}

export const editPassword = password => {
  return dispatch =>
    axios.put(`http://localhost:4000/passwords/${password.id}`, password)
      .then(res => {
        return dispatch({
          type: 'EDIT_PASSWORD',
          payload: res.data,
        })
      })
}

export const deletePassword = id => {
  return dispatch =>
    axios.delete(`http://localhost:4000/passwords/${id}`)
      .then(res => {
        return dispatch({
          type: 'DELETE_PASSWORD',
          payload: id
        })
      })
}