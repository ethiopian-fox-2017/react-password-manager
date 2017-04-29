import { SEARCH_PASSWORD } from '../actions/constants'

const SearchReducer =(state = '',action) =>{

  switch (action.type) {
    case SEARCH_PASSWORD : return action.payload;
    default: return state

  }
}

export default SearchReducer
