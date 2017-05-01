import { FETCH_PASSWORD,ADD_PASSWORD,DELETE_PASSWORD,EDIT_PASSWORD } from '../actions/constants';
const initialState =[];
import axios from 'axios';

const fetchDataProcess = (payloads) => {
  const password = payloads.map((payload) => {
    return {
      id:payload.id,
      url: payload.url,
      username: payload.username,
      password: payload.password,
      updatedAt: payload.updatedAt,
      createdAt: payload.createdAt,
    };
  });
  return password;
};

const addPassword = (state,payload) =>{
  let ids = state.map(password => password.id)
  let id = Math.max(...ids)+1
  let newpassword={...payload, id:id};
  let newstate =[...state,newpassword];
  axios.post('http://localhost:3004/passManager', {
    url:newpassword.url,
    username:newpassword.username,
    password:newpassword.password,
    createdAt:newpassword.createdAt,
    updatedAt:newpassword.updatedAt
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return newstate;
}
const deletePassword = (state,id) => {
  let passwords = state;
  let newstate = passwords.filter (password => password.id!==id);
  axios.delete(`http://localhost:3004/passManager/${id}`, {
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return newstate;
}

const editPassword = (state,newpassword) => {
  let newstate = state.map(password => {
    if (password.id===newpassword.id) {
       return{...password,
         url: newpassword.url,
         username: newpassword.username,
         password: newpassword.password,
         updatedAt: newpassword.updatedAt,
         createdAt: newpassword.createdAt,
       }
    }
    return password
  })
  return newstate
}

const PasswordReducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCH_PASSWORD : {
      const newstate = fetchDataProcess(action.payload);
      return newstate;
    }
    case ADD_PASSWORD : return addPassword(state,action.payload);
    case DELETE_PASSWORD : return deletePassword(state,action.payload);
    case EDIT_PASSWORD : return editPassword(state,action.payload);
    default:return state

  }

}

export default PasswordReducer
