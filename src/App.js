import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Partners from './pages/Partners';
import Signin from './pages/Signin';
import Index from './pages/Index';

const App = () => (
  <Router>
    <Route path='/' exact component={Index} />
    <Route path='/partners/' component={Partners} />
    <Route path='/signin/' component={Signin} />
  </Router>
);

export default App;
