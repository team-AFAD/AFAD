import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Router from './utils/Router';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
  </React.StrictMode>
);

