import axios from 'axios'

export const accountIsLoading = (bool) => {
  return {
    type : 'ACCOUNTS_IS_LOADING',
    payload : bool,
  }
}

export const fetchAccount = (url) => {
  console.log('sudah jalan')
  return (dispatch) => {

        console.log('tes');
        return axios.get('http://localhost:4000/passwords')
             .then((response) => {
               console.log(response)
               dispatch({
                 type : 'FETCH_ACCOUNT',
                 payload : response.data
               })
              }
             )
        }
  };



export const addAccount = (payload) => {
  return dispatch =>
         axios.post('http://localhost:4000/passwords',payload)
              .then(responds => {
                dispatch({
                  type : 'ADD_ACCOUNT',
                  payload : responds.data
                })
              })
              .catch(err => console.log(err))
}

export const editAccount = (payload) => {
  return dispatch =>
        axios.put('http://localhost:4000/passwords/'+payload.id, payload)
             .then(response => {
               dispatch({
                 type : 'EDIT_ACCOUNT',
                 payload : response.data,
               })
             }).catch(error => console.log(error))
}


export const deleteAccount = (idTarget) => {
  return dispatch =>
        axios.delete('http://localhost:4000/passwords/'+idTarget)
              .then(response => {
                dispatch({
                  type : 'DELETE_ACCOUNT',
                  payload : idTarget
                })
              })
            .catch(error => console.log(error))
}

export const searchKeywords = (keyword) => {
  return {
    type : 'SEARCH_KEYWORDS',
    payload : keyword
  }
}
