export const passManager = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'GET_DATAS': {
      // let result = Object.assign({}, state, {
      //   datas: action.datas,
      // })
      // console.log('---asd',result);
      return action.datas;
    }
    default:
      return state
  }
}
