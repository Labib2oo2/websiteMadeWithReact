import React, { useState } from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom'




const   Error  = ()=>{

  let history = useHistory("");
    let [src,setSrc] = useState();
    
    
    const search =  (e)=>{
        
     let val = e.target.value;
       
   if(val ==""){  setSrc(""); }else{
      
      setSrc(`https://source.unsplash.com/200x200/?${val}`)
   }

    };





    return (<>


    <h1> 404 error page 
      <button onClick={()=>{history.push("/about"); }}> go back</button>
       QQ &#x1F97C;
       </h1>
    <input onChange={search}/> <br/><br/>
    <img src={src}/>
       
       
       
       </>);

   







};

export default   Error  ;