import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardMain from './Components/Cards/CardsMain';
import CardUpoutUs from './Components/Cards/CardsAboutUs';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardMain />
    <CardUpoutUs />
  </React.StrictMode>,
  document.getElementById('root')
);
