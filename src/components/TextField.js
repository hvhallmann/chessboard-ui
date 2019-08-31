import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
  const onChange = ev => props.onChange(ev.target.name, ev.target.value);

  return (
    <div className='form-group row'>

      <label
        className='col-md-4'
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <input
        className='form-control col-md-6'
        id={props.id}
        name={props.name}
        onChange={onChange}
        type='text'
        value={props.value}
      />

    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default TextField;
