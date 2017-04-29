// const addData = (state, newData) => {
//   let maxId = 0
//   const ids = state.map(data => data.id);
//   if (state.length !== 0) {
//     maxId = Math.max(...ids);
//   }
//   const createdAt = new Date();
//   const data = {
//     id: maxId + 1,
//     url: newData.url,
//     username: newData.username,
//     password: newData.password,
//     createdAt: createdAt.toISOString(),
//     updatedAt: ''
//   }
//   const newState = [...state, data]
//   return newState;
// }

const passManager = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATAS': {
      return action.datas;
    }

    default:
      return state
  }
}
