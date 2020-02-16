import React from 'react';
import PropTypes from 'prop-types';
import useCombinedReducers from './hooks/useCombinedReducers';
import { StoreContext } from './hooks/useStore';

const Provider = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = (action) => {
    for (let i = 0; i < reducers.length; i += 1) {
      reducers[i](action);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: triggerDispatchs
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
