import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Partners from './pages/Partners/Partners';
import Signin from './pages/Signin';
import Index from './pages/Index';
import Roles from './pages/Roles/Roles';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/partners/' component={Partners} />
    <Route path='/signin/' component={Signin} />
    <PrivateRoute path='/roles/' component={Roles} />
  </Router>
);

export default App;
