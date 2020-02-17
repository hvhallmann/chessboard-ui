import React from 'react';

import Wizard from './Wizard';

const Index = () => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-10'>

        <Wizard />

        <div className="alert alert-dark" role="alert">
        {
          (process.env.NODE_ENV !== 'production')
            ? <div className="alert alert-dark" role="alert">
                <small>You are running this application in
                  <b>{process.env.NODE_ENV}</b> mode.</small>
                <small>You are pointing this application to 
                  <b>{process.env.REACT_APP_API_URL}</b></small>
              </div>
            : null
        }

        </div>
      </div>
    </div>
  </div>
);

export default Index;
