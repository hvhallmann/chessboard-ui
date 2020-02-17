import React, { useState } from 'react';
import Board from './Board';
import requestApi from '../../requestApi';
import './style.css';

const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const realHorizon = [1, 2, 3, 4, 5, 6, 7, 8];
const vertical = [8, 7, 6, 5, 4, 3, 2, 1];
const Container = () => {
  const onStart = () => {
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
    return initialData;
  };

  const [rows, setRows] = useState(onStart());

  const findOnInitialData = (value) => {
    let answer = {};
    rows.forEach((aLine) => {
      const item = aLine.find(it => it.value === value);
      if (item) answer = item;
    });
    return answer;
  };

  const onClearArray = () => {
    const copy = [...rows];
    rows.forEach((row) => {
      row.forEach((col) => {
        const obj = col;
        obj.highlight = false;
        obj.lowlight = false;
      });
    });
    setRows(copy);
  };

  const onSelect = (selected) => {
    onClearArray();
    // const upperSelected = selected.target.innerHTML.toUpperCase();
    const upperSelected = selected.toUpperCase();
    requestApi.get(`api/movements/options?selected=${upperSelected}`)
      .then((data) => {
        const copy = [...rows];
        data.forEach((el) => {
          const tile = findOnInitialData(`${el.x}${el.y}`);
          if (el.iteration === 1) {
            tile.highlight = true;
          } else {
            tile.lowlight = true;
          }
        });

        setRows(copy);
      });
  };

  return (
    <div className='container'>
      <div className='col-md-10'>
        <h2>Knight Chess</h2>
      </div>
      <Board onSelect={onSelect} rows={rows}/>
      <br/>
      <button type="button" onClick={() => onClearArray()}>
        <a href="/">Help</a>
      </button>
      <button type="button" onClick={() => onClearArray()}>
        Clear
      </button>
    </div>
  );
};


export default Container;
