/* eslint-disable no-underscore-dangle */
import React from 'react';

import Menu from '../../components/Menu';
import CRUD from '../../components/CRUD';

import { listColumns, formFields } from './config';

const Roles = () => (
  <div className='container-fluid'>
    <div className='row'>
      <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
        <Menu />
      </nav>

      <CRUD
        resourceUri='/role'
        label='Papéis'
        listColumns={listColumns}
        formFields={formFields}
      />
    </div>
  </div>
);

export default Roles;
