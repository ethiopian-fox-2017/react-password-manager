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

export const addData = data => ({
  type: ADD_DATA,
  payload: data
})

export const editData = data => ({
  type: EDIT_DATA,
  payload: data
})

export const deleteData = id => ({
  type: DELETE_DATA,
  payload: id
})

export const fetchData = () => (
  (dispatch) => {
    axios.get('http://localhost:3000/users')
      .then(res => dispatch(fetchDataSuccess(res.data)))
  }
)