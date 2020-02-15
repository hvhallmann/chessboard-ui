import React, { useState } from 'react';
import './style.css';

const Row = (props) => {
  const [children] = useState(props.tiles);

  return (
    <div className='row'>{children}</div>
  );
};

export default Row;
