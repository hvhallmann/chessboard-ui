import React, { Fragment } from 'react';
import '@kenshooui/react-multi-select/dist/style.css';
import MultiSelect from '@kenshooui/react-multi-select';

const MultiSelectField = props => (
  <Fragment>
    <h4>{props.label}</h4>

    <MultiSelect
      items={props.options}
      withGrouping showSelectAll={false}
      selectedItems={props.value}
      onChange={props.onchange}
    />
  </Fragment>
);

export default MultiSelectField;
