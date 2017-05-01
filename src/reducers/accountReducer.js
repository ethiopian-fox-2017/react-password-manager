
const InitialState = []

const accountReducer = (state = InitialState, {type, payload}) => {
  switch(type){
    case "FETCH_ACCOUNT" :{
      console.log('jalan');
      let newAccount = [...payload]
      console.log(newAccount);
      return newAccount
    }
    case "ADD_ACCOUNT_SUCCESS" :{
      let newState = [...state, payload]
      return newState
    }
    case "EDIT_ACCOUNT" : {
      let newState = state.map(account => account.id == payload.id ? payload : account)
      return newState
    }
    case "DELETE_ACCOUNT" : {

      let newState = state.filter(account => account.id != payload)
      return newState
    }
    default : {
      return state
    }
  }
}


export default accountReducer
