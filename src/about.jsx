import React from 'react';
import Menu from './menu';
import { useParams } from 'react-router-dom';
import Common from './Common';
import prog from './undraw_programmer_imem.svg';
import pic from './img/code.svg'
import tim from './img/team-management.svg'

const About = (props)=>{
  
   return(<><Common title="Welcome to Our website.." src={prog}/>
   <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto container  text-center">
      <div className="row mt-5">

      <p  className="margin display-6 about_sub">Do You Have A Web Development Project We Can Help With?

</p>
< div className="display-6 mt-5" style={{borderBottom:"2px solid var(--bs-blue) " ,paddingBottom:"5%"}}>WE BUILD AWESOME WEBSITES
 </div>
 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

 <img width="50%" className="pic m-5" src={pic}/>

 </div>
 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

          <img width="50%" className="pic m-5" src={tim}/>
  </div>
      </div>

   </div>
           
   
   </>);

           

};

export default About ;