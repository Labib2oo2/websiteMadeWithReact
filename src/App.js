import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import About from './about';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './home';
import Services from './Services';
import Contact from './Contacts';
import Footer from './Footer';
import Menu from './menu';
import Error from './Error';
import {NavLink}  from 'react-router-dom';
function App() {
  
    

  return (<> 
  <BrowserRouter>
  <Menu/>        

  <Switch>
 <Route exact component={Home}></Route>
 <Route exact path="/" component={Home}></Route>
 <Route exact path="/about" component={About}></Route>
 <Route exact path="/services" component={Services}></Route>
 <Route exact path="/contact" component={Contact}></Route>


</Switch>
 <Footer/>
</BrowserRouter>
      
       </>       

);

  };

export default App;
