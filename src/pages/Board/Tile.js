import React from 'react';
import classname from 'classname';
import './style.css';

// https://codepen.io/wafs/pen/iJjsd
// https://codepen.io/leimapapa/pen/djxjmV

// http://sergiojunior.com.br/substituindo-redux-por-hooks/

const Tile = (props) => {
  const styleName = classname({
    'col-xs-1': true,
    Tile: true,
    highlight: props.highlight,
    lowlight: props.lowlight,
    black: props.black,
  });


  // const onClick = async (ev) => {
  //   const selected = ev.target.innerHTML.toUpperCase();
    // horse icon
    // String.fromCharCode(9816)
  // };
  const onKeyDown = (ev) => {
    console.log('keydown', ev.target.innerHTML);
  };
  return (
    <div onKeyDown={onKeyDown} role="menuitem" onClick={props.onSelect} tabIndex={0} className={styleName}>{props.name}</div>
  );
};

export default Tile;
