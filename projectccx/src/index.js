import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mod_producto/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Vizualizacion from './mod_usuario/Vizualizacion';
import Registerproduct from './mod_producto/Registerproduct';
import Listproducts from './mod_producto/Listproducts';
import Editproduct from './mod_producto/Editproduct';
import Edicionproductos from './mod_producto/Edicionproductos'

ReactDOM.render(
  <React.StrictMode>
    <Edicionproductos/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

