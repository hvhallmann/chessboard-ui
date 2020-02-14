import React from 'react';

import Menu from '../components/Menu';
import Board from './Board';

const Index = () => (
  <div className='container-fluid'>
    <div className='row'>
      <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
        <Menu />
      </nav>
      <div className='col-md-10'>
        <h2>Welcome, lets play a game?</h2>

        <Board />

        {
          (process.env.NODE_ENV !== 'production')
            ? <div>
              <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <small>You are pointing this application to <b>{process.env.REACT_APP_API_URL}</b></small>
              </div>
            : null
        }
      </div>
    </div>
  </div>
);

export default Index;
