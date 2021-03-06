import React from 'react';
import classname from 'classname';
import './style.css';

const Tile = (props) => {
  const styleName = classname({
    'col-xs-1': true,
    Tile: true,
    highlight: props.highlight,
    lowlight: props.lowlight,
    black: props.black,
    knight: props.knight
  });

  const onClick = () => {
    props.onSelect(props.name);
  };

  const onKeyDown = () => {
    // console.log('keydown', ev.target.innerHTML);
  };
  return (
    <div
      onKeyDown={onKeyDown}
      role="menuitem"
      onClick={onClick}
      tabIndex={0}
      className={styleName}>
      {props.knight}
    </div>
  );
};

export default Tile;
