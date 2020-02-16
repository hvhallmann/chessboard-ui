import { useReducer } from 'react';
import movementReducer, { movementDefault } from '../reducers/movement';

const useCombinedReducers = () => {
  const [movementStore, movement] = useReducer(movementReducer, movementDefault);

  return {
    store: { ...movementStore },
    reducers: [movement]
  };
};

export default useCombinedReducers;
