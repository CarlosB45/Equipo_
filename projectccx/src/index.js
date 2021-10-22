import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mod_producto/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Vizualizacion from './mod_usuario/Vizualizacion';
import Registerproduct from './mod_producto/Registerproduct';

ReactDOM.render(
  <React.StrictMode>
    <Vizualizacion/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

