import React from 'react';

const Wizard = () => {
  return (
    <div className='container-fluid'>
      <div className='col-md-10'>
        <h2>Welcome, lets play a game?</h2>
      </div>
      {/* style="width: 18rem;" */}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Knight Chess</h5>
          <h6 class="card-subtitle mb-2 text-muted">An app for knight master</h6>
          <p class="card-text">* You can click on any square of the board to select it.</p>
          <p class="card-text">* Once the square is selected, the system will show the next possible knight move in yellow.</p>
          <p class="card-text">* And it will also show in red, the possibilities related to the second turn of you knight.</p>
          <p class="card-text">* Once your move is done, your next move is going to show you possibilities again.</p>
          <a href="/board" class="card-link">Jump Wizard</a>
          <a href="/introduction" class="card-link">Next Page</a>
        </div>
      </div>
    </div>
  );
}
export default Wizard;