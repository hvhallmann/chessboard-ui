import React, { useState, useEffect } from 'react';
import ConnectTo from '../../store/connect';
import Tile from './Tile';
import Row from './Row';
import './style.css';


const Container = ({ dispatch, movement, firstMoves }) => {
  // const [aFirstMoves, setArrayFirstMoves] = useState(firstMoves);
  const [rows, setRows] = useState([]);

  console.log('movement done', movement);
  // console.log('movement firstMoves state', aFirstMoves);
  console.log('movement firstMoves ', firstMoves);

  const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const realHorizon = [1, 2, 3, 4, 5, 6, 7, 8];
  const vertical = [8, 7, 6, 5, 4, 3, 2, 1];

  // useEffect(() => {
  // }, []);


  // const rows = [];
  for (let y = 0; y < vertical.length; y += 1) {
    let name = '';
    const value = {};
    const line = [];
    let match = false;
    let item;
    for (let x = 0; x < horizontal.length; x += 1) {
      name = `${horizontal[x]}${vertical[y]}`;

      value.x = realHorizon[x];
      value.y = vertical[y];

      const isBlack = ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0));

      // const objMatch = firstMoves.find(mov => mov.x === value.x && mov.y === value.y);
      // const item = firstMoves.pop();
      
      for (let index = 0; index < firstMoves.length; index += 1) {
        const element = firstMoves[index];
        if (element.x === value.x && element.y === value.y) {
          item = element;
        }
      }

      // let match = (item) ? true : false;
      // console.log('obj', item);
      if (item) {
        // console.log('match----', match);
        match = true;
        name = 'val';
      }

      line.push(<Tile highlight={match} black={isBlack} key={name} name={name} value={value}/>);
    }
    console.log('here line', y);
    rows.push(<Row key={name} tiles={line}/>);
  }

  return (
    <div className='container-fluid'>
      <div className='Chessboard'>{rows}</div>
    </div>
  );
};

const mapStateToProps = ({ movement, firstMoves }, props) => {
  return {
    movement,
    firstMoves,
    ...props
  };
};

export default ConnectTo(mapStateToProps)(Container);
