// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot
import App from './App'; // Importa Main
import './index.css'; // Importa eventuali stili globali

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea il root
root.render(
  <React.StrictMode>
    <App /> {/* Monta Main qui */}
  </React.StrictMode>
);
