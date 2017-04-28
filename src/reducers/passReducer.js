export const passManager = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATAS': {
      return action.datas;
    }
    default:
      return state
  }
}
