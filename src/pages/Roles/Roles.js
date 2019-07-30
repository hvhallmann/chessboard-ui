/* eslint-disable no-underscore-dangle */
import React from 'react';
import { CRUD } from 'tpz-react-components';

import Menu from '../../components/Menu';
import neideApi from '../../neideApi';

import { listColumns, formFields } from './config';

const Roles = () => (
  <div className='container-fluid'>
    <div className='row'>
      <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
        <Menu />
      </nav>

      <CRUD
        api={neideApi}
        resourceUri='/role'
        label='Papéis'
        listColumns={listColumns}
        formFields={formFields}
      />
    </div>
  </div>
);

export default Roles;
