import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Window from './Components/Frame';
import Time from './Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Time />
  </React.StrictMode>
);
