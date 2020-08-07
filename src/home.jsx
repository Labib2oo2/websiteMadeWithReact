import React from 'react';
import Menu from './menu';
import Common from './Common';
import web from './undraw_web_developer_p3e5.svg'
import { NavLink } from 'react-router-dom';


const   Home  = ()=>{


    return (<> 
    <Common title="Grow your business with" src={web}/>
    

    <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto container mt-5 ">
   <div className="row">
 <br/> 
 
   <div className="display-6 hd   text-center col-lg-12 col-md-12 col-sm-12 col-12  ">Need a Website or Mobile App developed?</div>
  <NavLink to="/contact" className="  click mt-5 mx-auto ">Contact Us</NavLink>
  <div className="container"> <div className="row d-flex ">
      
     <div className="row mt-5 g-3 mx-auto">
         <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12 mx-auto">   
         <div class="counter">
      <i class="fa fa-coffee fa-2x"></i> 
      <h2 class="timer count-title count-number" data-to="1700" data-speed="1500">1700</h2>
      <p class="count-text ">Happy Clients</p>
         </div></div>
         <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12 mx-auto"> 
           
         <div class="counter">
      <i class="fa fa-lightbulb-o fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="11900" data-speed="1500">11900</h2>
      <p class="count-text ">Project Complete</p>
    </div>
             
          </div>
    <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12 mx-auto"> 
        
    <div class="counter">
      <i class="fa fa-bug fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
      <p class="count-text ">Coffee With Clients</p>
    </div>

    
    </div>
    

    </div>
              </div>
      
            
               

      
      
      
      
      
      
      
    </div>
    </div>

    

</div>
 
    


    </>);

        
     









};

export default   Home  ;