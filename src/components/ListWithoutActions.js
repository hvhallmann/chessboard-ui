/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import _get from 'lodash.get';

const List = (props) => {
  const docs = props.docs || [];

  const selected = doc => props.doc && doc._id === props.doc._id;

  const renderTH = (column, idx) => (
    <th key={`th${idx}`}>
      <div
        className='clickable' role='button' tabIndex='0'
        onKeyDown={() => { }}
      >
        {column.label}
        &nbsp;
        <span className={column.icon} />
      </div>
    </th>
  );

  const renderTD = doc => (column, idx) => (
    <td key={`td${idx}-doc${doc._id}`}>
      {_get(doc, column.name)}
    </td>
  );

  const renderTR = cols => (doc, idx) => (
    <tr key={`tr${idx}`} className={classname({ 'table-primary': selected(doc) })}>
      {cols.map(renderTD(doc))}
    </tr>
  );

  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          {props.columns.map(renderTH)}
        </tr>
      </thead>
      <tbody>
        {docs.map(renderTR(props.columns))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  columns: PropTypes.array.isRequired,
  docs: PropTypes.array,
};

export default List;
