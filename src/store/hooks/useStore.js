import { useContext, createContext } from 'react';
import { movementDefault } from '../reducers/movement';

export const defaultStore = {
  store: { ...movementDefault },
  dispatch: () => {}
};

export const StoreContext = createContext(defaultStore);
export default () => useContext(StoreContext); // lower case 's'?
