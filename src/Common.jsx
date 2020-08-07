import React from 'react';


const Common = (props)=>{

return (<>   
    <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto container d-flex mt-5 ">
    <div className="row "><div className=" mt-3 mx-auto">
        
   
    <div className="row   d-flex align-items-center  ">
        <div className="col-lg-6 col-md-12 col-sm-12  col-12 order-2 order-lg-1   ">
                
                <h1 className=" order-last  display-6 justify-contents-center mt-5"> {props.title} <strong style={{color:"deepskyblue"}}>Labib</strong> </h1>

   </div>
             <div className="col-lg-6 col-sm-12 col-md-10  col-12 order-1 order-lg-2 justify-contents-center ">   <img className="img-fluid" src={props.src}/>     </div>           
                
                   

             </div>

     
    
               

            
             </div> 
        
        </div>
                
        </div></>);





};




export default Common;