import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Labib from './hooks';
import App  from './App';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import Menu from './menu';
import Error from './Error';
import {NavLink}  from 'react-router-dom';

/*

*/ 

ReactDOM.render(
  <>
  <App/>
   </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
