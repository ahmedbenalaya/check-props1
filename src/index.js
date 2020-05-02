import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const products=[{id:1,category:'Electronics',price:'600d',name:'phone'},{id:2,category:'Clothes',price:'60d',name:'pull'}]


ReactDOM.render(
  <React.StrictMode>
     <ProductTable product={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
