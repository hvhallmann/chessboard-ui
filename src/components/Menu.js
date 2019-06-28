import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <br />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/partners/">Parceiros</Link></li>
        <li><Link to="/users/">Usuários</Link></li>
        <li><Link to="/users/">Permissões</Link></li>
        <li><Link to="/roles/">Papeis</Link></li>
      </ul>
    </nav>
  </div>
);

export default Menu;
