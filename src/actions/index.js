import axios from 'axios'
import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  FETCH_DATA_SUCCESS
} from '../constants'

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

export const addDataSuccess = data => ({
  type: ADD_DATA,
  payload: data
})

export const editDataSuccess = data => ({
  type: EDIT_DATA,
  payload: data
})

export const deleteDataSuccess = id => ({
  type: DELETE_DATA,
  payload: id
})

export const deleteData = id => (
  (dispatch) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => dispatch(deleteDataSuccess(id)))
  }
)

export const editData = (data) => (
  (dispatch) => {
    const editedData = {
      id: data.id,
      url: data.url,
      username: data.username,
      password: data.password,
      createdAt: data.createdAt,
      updatedAt: new Date()
    }
    axios.put(`http://localhost:3000/users/${data.id}`, editedData)
      .then(res => dispatch(editDataSuccess(res.data)))
  }
)

export const addData = (data) => (
  (dispatch) => {
    const newData = { ...data, createdAt: new Date().toISOString(), updatedAt: '' }
    axios.post('http://localhost:3000/users', newData)
      .then(res => dispatch(addDataSuccess(res.data)))
  }
)

export const fetchData = () => (
  (dispatch) => {
    axios.get('http://localhost:3000/users')
      .then(res => dispatch(fetchDataSuccess(res.data)))
  }
)