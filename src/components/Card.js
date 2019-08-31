import React, { useState } from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

const Card = (props) => {
  const [show, setShow] = useState(false);

  const toggle = (ev) => {
    ev.preventDefault();
    setShow(!show);
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='mb0'>
          <button className='btn btn-link' onClick={toggle}>{props.title}</button>
        </h2>
      </div>

      <div className={classname({ collapse: true, show })}>
        <div className='card-body'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Card;
