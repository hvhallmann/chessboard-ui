import React from 'react';
import { Link } from 'react-router-dom';
import neideApi from '../neideApi';

const onNext = async () => {
  const docx = await neideApi.post('/sort', {
    input: [23, 56, 3, 45, 75, 100, 22]
  });
  console.log('docx', docx);
};

const Menu = () => (
  <div>
    <h1>Github API</h1>
    <br />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users/">Users</Link></li>
        <button type="button" className="btn btn-link" onClick={onNext}>CallBullbe</button>
      </ul>
    </nav>
  </div>
);

export default Menu;
