import React from 'react';

const WizardStep = () => {
  return (
    <div className='container-fluid'>
      <div className='col-md-10'>
        <h2>Anything else?</h2>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Knight Chess</h5>
          <h6 class="card-subtitle mb-2 text-muted">An app for knight master</h6>
          <p class="card-text">* You can erase the board pressing the clear button.</p>
          <p class="card-text">* Help button will bring you to instructions page again.</p>
          <a href="/board" class="card-link">Jump Wizard</a>
          <a href="/board" class="card-link">Next Page</a>
        </div>
      </div>
    </div>
  );
}
export default WizardStep;