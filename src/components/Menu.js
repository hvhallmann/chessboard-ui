import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <h1>Github API</h1>
    <br />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users/">Users</Link></li>
      </ul>
    </nav>
  </div>
);

export default Menu;
