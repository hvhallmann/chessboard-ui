import React, { useState } from 'react';
import Tile from './Tile';
import './style.css';

const Row = (props) => {
  const [tiles] = useState(props.tiles);
  return (
    <div className='row align-row'>{
      tiles && tiles
        .map(tile => <Tile onSelect={props.onSelect}
          lowlight={tile.lowlight}
          highlight={tile.highlight}
          black={tile.isBlack}
          key={tile.name}
          name={tile.name}
          knight={tile.knight}
        />)
    }
    </div>
  );
};

export default Row;
