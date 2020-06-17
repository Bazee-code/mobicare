import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ProductsProvider} from './components/context/context';

ReactDOM.render(
	<ProductsProvider>
    	<App />
    </ProductsProvider>
    ,
  document.getElementById('root')
)
