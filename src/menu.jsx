import React from 'react';
import { NavLink } from 'react-router-dom';


const   Menu  = ()=>{


    return (<>
    <div className="row">
    <div className="col-lg-10 col-md-10 col-sm-10 col-10 py-xl-2 py-lg-3 py-sm-5 py-5 mx-auto">



    <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink exact className="navbar-brand  inactive "activeClassName="labib" to="/">Labib</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink  exact className="nav-link "activeClassName="labib" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink  exact className="nav-link "activeClassName="labib" to="/about">About</NavLink>
      </li>
   
      <li className="nav-item">
        <NavLink  exact className="nav-link "activeClassName="labib" to="/services">Services</NavLink>
      </li>

      <li className="nav-item">
        <NavLink  exact className="nav-link "activeClassName="labib" to="/contact">Contact</NavLink>
      </li>
   
    </ul>
    



  </div>
</nav>
    

 


    </div>
    </div>
    
    
    
    </>)








};

export default   Menu  ;