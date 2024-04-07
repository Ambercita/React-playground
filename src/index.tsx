import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import Home from './component/home';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);