import React from 'react';
import ReactDOM from 'react-dom/client'; // Notez le changement ici
import './index.css';
import App from './App';

// Créez la racine de votre application avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez root.render pour rendre votre application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);