import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Partners from './pages/Partners';
import Index from './pages/Index';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/partners/' component={Partners} />
  </Router>
);

export default App;
