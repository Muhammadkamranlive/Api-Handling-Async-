import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
ReactDOM.render(
  
    <BrowserRouter>
     <App />
    </BrowserRouter>
    ,
  document.getElementById('root')
);


reportWebVitals();
