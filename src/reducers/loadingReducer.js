

const loadingReducer = (state = false, {type, payload}) => {
    switch (type) {
      case "ACCOUNTS_IS_LOADING" :
        return payload

      default :
        return state
    }
}

export default loadingReducer
