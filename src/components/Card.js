import React, { useState } from 'react';
import classname from 'classname';

const initialState = {
  show: false
};

const Card = (props) => {
  const [state, setState] = useState(initialState);

  const toggle = (ev) => {
    ev.preventDefault();
    setState({ show: !state.show });
    return 1;
  };

  return (
    <div className="card">
    <div className="card-header">
      <h2 className="mb0">
        <button className="btn btn-link" onClick={toggle}>{props.title}</button>
      </h2>
    </div>

    <div className={classname({ collapse: true, show: state.show })}>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  </div>
  );
};

export default Card;
