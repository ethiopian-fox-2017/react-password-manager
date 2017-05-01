const searchReducer = (state = '', {type, payload}) => {
  switch(type){
    case "SEARCH_KEYWORDS" : return payload
    default : return state
  }
}
export default searchReducer
