import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Router from './utils/Router';
import './index.scss';
import { AuthContextProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      {/* <App /> */}
      <Router />
    </AuthContextProvider>
  // </React.StrictMode>
);

