import React from 'react';
import contactimg from './img/undraw_contact_us_15o2.svg';



const Contact=()=>{

return (<>
<div class="back py-5"      style={{backgroundImage:`url(${contactimg})`,backgroundSize:"cover",backgroundRepeat:"no-Repeat"}}>
<div className="col-lg-6 col-md-10 col-10 my-5 mx-auto " >
<form>
  <div class="form-group" ><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Name</span>
  </div>
  <input type="text" class="form-control" placeholder="Name..." aria-label="Name" aria-describedby="basic-addon1"/>
</div>
  </div>
  
  <div class="form-group"><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Email</span>
  </div>
  <input type="text" class="form-control" placeholder="Email..." aria-label="Email" aria-describedby="basic-addon1"/>
</div>
  </div>
  
  
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
  </div>
  <textarea rows="1"  cols="5" class="form-control" aria-label="With textarea"></textarea>
</div>


<button className="btn send mt-2 ">SEND  </button>
</form>
</div>
</div>
</>);

}




export default Contact;