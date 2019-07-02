import React from 'react';

import Menu from '../components/Menu';

const Index = () => (
  <div className='container-fluid'>
    <div className='row'>
      <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
        <Menu />
      </nav>
      <div className='col-md-10'>
        <h2>NEtwork IDEntification</h2>
        <p>Benvindo!</p>
      </div>
    </div>
  </div>
);

export default Index;
