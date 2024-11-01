// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main'; // Importiamo Main.js come punto di entrata principale

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
