import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Partners from './pages/Partners/Partners';
import Index from './pages/Index';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/users/' component={Partners} />
  </Router>
);

export default App;
