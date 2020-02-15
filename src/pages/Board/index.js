import React, { useState } from 'react';
import Tile from './Tile';
import Row from './Row';
import './style.css';


const Container = () => {
  const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const vertical = [8, 7, 6, 5, 4, 3, 2, 1];

  const rows = [];
  let row;
  for (let y = 0; y < vertical.length; y += 1) {
    let name = '';
    const line = [];
    for (let x = 0; x < horizontal.length; x += 1) {
      name = `${horizontal[x]}${vertical[y]}`;
      const isBlack = ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0));
      line.push(<Tile black={isBlack} key={name} name={name}/>);
    }
    row = <Row key={name} tiles={line}/>;
    rows.push(row);
  }

  return (
    <div className='container-fluid'>
      <div className='Chessboard'>{rows}</div>
    </div>
  );
};

export default Container;
