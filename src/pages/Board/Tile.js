import React, { useState } from 'react';
import classname from 'classname';
import { selectAction } from '../../store/reducers/movement';
import useStore from '../../store/hooks/useStore';
import requestApi from '../../requestApi';
import './style.css';

// https://codepen.io/wafs/pen/iJjsd
// https://codepen.io/leimapapa/pen/djxjmV

// http://sergiojunior.com.br/substituindo-redux-por-hooks/

const Tile = (props) => {
  const [value, setValue] = useState(props.value);
  const [highlight, setHighlight] = useState(props.highlight);
  const {
    dispatch,
    // store: { movement }
  } = useStore();

  // const selectHandler = () => dispatch(selectAction());
  console.log('props.firstMove', props.highlight);
  // console.log('props.firstName', props.name);
  // console.log('props.black', props.black);

  const styleName = classname({
    'col-xs-1': true,
    Tile: true,
    black: props.black,
    highlight
  });


  const onClick = async (ev) => {
    console.log('ev', ev.target.innerHTML);
    const selected = ev.target.innerHTML.toUpperCase();

    const requestResult = await requestApi.get(`api/movements/options?selected=${selected}`);

    dispatch(selectAction(selected, requestResult));
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
