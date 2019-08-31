import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './pages/Users/Users';
import Index from './pages/Index';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/users/' component={Users} />
  </Router>
);

export default App;
