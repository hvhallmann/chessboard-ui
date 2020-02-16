import React, { useState, useEffect } from 'react';
import Board from './Board';
import requestApi from '../../requestApi';
import './style.css';

const Container = () => {
  const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const realHorizon = [1, 2, 3, 4, 5, 6, 7, 8];
  const vertical = [8, 7, 6, 5, 4, 3, 2, 1];

  const initialData = [];
  let line = [];
  for (let y = 0; y < vertical.length; y += 1) {
    for (let x = 0; x < horizontal.length; x += 1) {
      const obj = {
        name: `${horizontal[x]}${vertical[y]}`,
        isBlack: ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0)),
        value: `${realHorizon[x]}${vertical[y]}`
      };
      line.push(obj);
    }
    initialData.push(line);
    line = [];
  }
  const [rows, setRows] = useState(initialData);

  console.log('initialData', initialData);

  const findOnInitialData = (value) => {
    let answer = {};
    initialData.forEach((aLine) => {
      const item = aLine.find(it => it.value === value);
      if (item) answer = item;
    });
    return answer;
  };

  const onSelect = (selected) => {
    console.log('ev', selected.target.innerHTML);
    const upperSelected = selected.target.innerHTML.toUpperCase();
    requestApi.get(`api/movements/options?selected=${upperSelected}`)
      .then((data) => {
        const copy = [...rows];
        console.log('data', data);
        data.forEach((el) => {
          // const item = copy[el.x][el.y];
          const tile = findOnInitialData(`${el.x}${el.y}`);
          console.log('got the folo', tile);
          if (el.iteration === 1) {
            tile.highlight = true;
          }
          tile.lowlight = true;
        });

        setRows(copy);
      });
  };

  return (
    <div className='container-fluid'>
      <Board onSelect={onSelect} rows={rows}/>
    </div>
  );
};


export default Container;
