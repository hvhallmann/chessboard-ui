import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

it('renders Row without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row tile={[{ isBlack: true }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
