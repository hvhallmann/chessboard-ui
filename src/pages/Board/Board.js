import React, { useState } from 'react';
import Row from './Row';
import './style.css';

const Board = (props) => {
  const [rows] = useState(props.rows);

  return (
    <div className='Chessboard'>{rows && rows.map((rowData, ind) => <Row onSelect={props.onSelect} key={ind} tiles={rowData} />)}</div>
  );
};

export default Board;
