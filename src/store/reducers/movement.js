export const movementDefault = {
  movement: 'a1',
  firstMoves: [],
  chessboard: [
    [{ name: 'a7' }, { name: 'a2', isBlack: true }, { name: 'a3' }],
    [{ name: 'b1' }, { name: 'b2', isBlack: true }, { name: 'b3' }]
  ],
  moreMoves: [],
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
        moreMoves: [
          [{ name: 'd1' }, { name: 'd2', isBlack: false }, { name: 'd3', isBlack: true }],
        ],
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
  console.log('requiem', payload);
  return {
    type: SELECT,
    selected,
    payload,
  };
};

export default movementReducer;
