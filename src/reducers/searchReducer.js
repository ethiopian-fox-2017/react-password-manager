const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_KEYWORDS': return action.payload
    default: return state
  }
}

export default searchReducer