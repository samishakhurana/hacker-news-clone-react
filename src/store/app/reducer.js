export const ACTION_TYPES = {
  
}


const INITIAL_STATE = {mode: 'light'}

const app = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SET_MODE':
      return Object.assign(state, {}, {mode: action.payload});
    default:
      return state
  }
}

export default app;