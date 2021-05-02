import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './BooksList';
import './index.css';
import MainPageTest from './MainPageTest';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <MainPageTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
