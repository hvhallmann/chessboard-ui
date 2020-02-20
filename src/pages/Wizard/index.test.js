import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

it('renders wizard page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
