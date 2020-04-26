
const timeReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_TIME':
      return state = new Date();
    default:
      return state
    }
  }
  
  export default timeReducer
