import React from 'react';
import Card from './Card';
import affiliate from './img/affiliate.jpg';
import dataentry from './img/dataentry.jpg';
import digital from './img/digital.jpg';
import freelance from './img/freelance.jpg';
import game from './img/game.jpg';
import graphics from './img/graphics.jpg';
import iphone from './img/iphone.jpg';
import marketting from './img/marketting.jpg';
import photography from './img/photography.jpg';
import seo from './img/seo.jpg';
import youtube from './img/youtube.jpg';
import webdev from './img/webdev.jpg';
import Sdata from './Sdata';

const Services =()=>{
     
    return (<>
    <div class="row">
       <h1 className="text-center my-5 ">  Our Services</h1>
    <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto container-fluid">
    <div className="row"><div className="  col-md-12 mx-auto">

    <div className="row mx-auto gy-5">
      
      {Sdata.map((val)=>{   return ( <Card imgsrc={val.imgsrc}  title={val.title}/>)})}
        
        
        
        
   
      </div>
    </div>
    </div>
    </div>
    </div>
    
    </>);




};





export default Services;