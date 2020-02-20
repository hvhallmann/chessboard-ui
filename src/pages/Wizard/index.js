import React from 'react';
import knight from './knight.png';

const Wizard = () => {
  return (
    <div className='container-fluid'>
      <div className='col-md-10'>
        <h2>Welcome, lets play a game?</h2>
      </div>
      <div className="alert alert-dark" role="alert"/>
      <div className="card">
        <img className="card-img-top img-size" src={knight} alt="Card knight cap"/>
        <div className="card-body">
          <h5 className="card-title">Knight Chess</h5>
          <h6 className="card-subtitle mb-2 text-muted">An app for knight master</h6>
          <p className="card-text">* You can click on any square of the board to select it.</p>
          <p className="card-text">* Once the square is selected, the system will show the next possible knight move in chocolate color.</p>
          <p className="card-text">* And it will also show in cadetblue color, the possibilities related to the second turn of you knight.</p>
          <p className="card-text">* Once your move is done, your next move is going to show you possibilities again.</p>
          <a href="/board" className="card-link">Jump Wizard</a>
          <a href="/introduction" className="card-link">Next Page</a>
        </div>
      </div>
    </div>
  );
}
export default Wizard;