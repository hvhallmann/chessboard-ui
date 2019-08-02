import React, { Fragment } from 'react';
import '@kenshooui/react-multi-select/dist/style.css';
import MultiSelect from '@kenshooui/react-multi-select';

const MultiSelectField = (props) => {
  const onChange = value => props.onChange(props.name, value.map(i => i.id));

  return (
    <Fragment>
      <h4>{props.label}</h4>

      <MultiSelect
        items={props.options}
        withGrouping showSelectAll={false}
        selectedItems={props.value.map(v => props.options.find(o => o.id === v))}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default MultiSelectField;
