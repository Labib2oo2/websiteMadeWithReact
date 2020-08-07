import React from 'react';
import { NavLink } from 'react-router-dom';


const  Footer = ()=>{
  var det =   new Date();
  var yar = det.getFullYear();

        return (
         <>
<footer class="page-footer font-small blue">

  <div class="footer-copyright text-center py-3">© {yar} Copyright:
    <NavLink  className="futer" to="./contact">  Labib Hasan </NavLink >
  </div>

</footer>
         
         
         
         
         </>


        );



};



export default Footer