// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot
import Main from './Main'; // Importa Main
import './index.css'; // Importa eventuali stili globali

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea il root
root.render(
  <React.StrictMode>
    <Main /> {/* Monta Main qui */}
  </React.StrictMode>
);
