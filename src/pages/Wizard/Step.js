import React from 'react';
import knight from './knight.png';

const WizardStep = () => {
  return (
    <div className='container-fluid'>
      <div className='col-md-10'>
        <h2>Buttons and Movements</h2>
      </div>
      <div className="alert alert-dark" role="alert"/>
      <div className="card">
        <img className="card-img-top img-size" src={knight} alt="Card knight cap"/>
        <div className="card-body">
          <h5 className="card-title">Knight Chess</h5>
          <h6 className="card-subtitle mb-2 text-muted">An app for knight master</h6>
          <p className="card-text">* You can erase the board pressing the clear button.</p>
          <p className="card-text">* Help button will bring you to instructions page again.</p>
          <p className="card-text">* Below the board will display a list with the movements made on ascending order.</p>
          <a href="/board" className="card-link">Jump Wizard</a>
          <a href="/board" className="card-link">Next Page</a>
        </div>
      </div>
      <div className="alert alert-dark" role="alert"/>
    </div>
  );
}
export default WizardStep;