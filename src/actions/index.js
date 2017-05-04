import axios from 'axios'
import fetch from 'isomorphic-fetch'
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
      updatedAt: new Date().toISOString()
    }
    axios.put(`http://localhost:3000/users/${data.id}`, editedData)
      .then(() => dispatch(editDataSuccess(editedData)))
  }
)

export const addData = (data) => (
  (dispatch) => {
    const newData = {
      url: data.url,
      username: data.username,
      password: data.password,
      createdAt: new Date().toISOString(),
      updatedAt: ''
    }
    return fetch('http://localhost:3000/users', {
      method: 'post',
      body: JSON.stringify(newData)
    }).then(() => dispatch(addDataSuccess(newData)))
  }
)

export const fetchData = () => (
  (dispatch) => {
    return fetch('http://localhost:3000/users')
      .then(res=> res.json())
      .then(data => dispatch(fetchDataSuccess(data)))
  }
)