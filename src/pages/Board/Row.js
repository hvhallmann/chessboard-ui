import React, { useState } from 'react';
import Tile from './Tile';
import './style.css';

const Row = (props) => {
  const [tiles] = useState(props.tiles);

  return (
    <div className='ml-2 row'>{
      tiles && tiles
        .map(tile => <Tile onSelect={props.onSelect}
          lowlight={tile && tile.lowlight} highlight={tile && tile.highlight}
          black={tile && tile.isBlack} key={tile && tile.name} name={tile && tile.name} />)
    }
    </div>
  );
};

export default Row;
