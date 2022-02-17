import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataContext from './DataContext';

ReactDOM.render(
  <DataContext>
    <App />
  </DataContext>,
  document.getElementById('root')
);
