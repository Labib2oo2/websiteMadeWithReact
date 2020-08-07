import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios';



  const Labib = ()=>{

     async function deta (){
  
       const respo =  await axios.get("https://pokeapi.co/api/v2/pokemon/1")

console.log(respo);

     };
     deta();

    return <h1> hello     </  h1>;
  };

    export default Labib ;