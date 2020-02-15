import React from 'react';
import classname from 'classname';
import './style.css';

const Tile = (props) => {
  const styleName = classname({
    Tile: true,
    col: true,
    black: props.black,
  });
  const onClick = (ev) => {
    console.log('ev', ev.target.innerHTML);
    // horse icon
    // String.fromCharCode(9816)
  };
  const onKeyDown = (ev) => {
    console.log('keydown', ev.target.innerHTML);
  };
  return (
    <div onKeyDown={onKeyDown} role="menuitem" onClick={onClick} tabIndex={0} className={styleName}>{props.name}</div>
  );
};

export default Tile;
