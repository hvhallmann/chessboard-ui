export const movementDefault = {
  movement: 'a1',
  firstMoves: []
};

export const SELECT = 'SELECT';
export const RESET = 'RESET';

const movementReducer = (state = movementDefault, action) => {
  console.log('requiem type', action.type);
  // console.log('requiem payl', action.spayload);
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        movement: action.selected,
        firstMoves: action.payload
      };
    case RESET:
      return {
        movement: 'a1',
        firstMoves: []
      };
    default:
      return state;
  }
};

export const selectAction = (selected, payload) => {
  // console.log('requiem', payload);
  return {
    type: SELECT,
    selected,
    payload,
  };
};

export default movementReducer;
