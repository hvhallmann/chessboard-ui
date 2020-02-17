import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './pages/Users/Users';
import Board from './pages/Board';
import Index from './pages/Index';
import WizardStep from './pages/Wizard/Step';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/users/' component={Users} />
    <Route path='/board/' component={Board} />
    <Route path='/introduction/' component={WizardStep} />
  </Router>
);

export default App;
