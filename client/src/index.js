import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Router from './utils/Router';
import './index.scss';

import { AuthContextProvider } from "./context/AuthContext";
// import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      {/* <Layout> */}
      {/* <App /> */}
      <Router />
      {/* </Layout> */}
    </AuthContextProvider>
  // </React.StrictMode>
);

