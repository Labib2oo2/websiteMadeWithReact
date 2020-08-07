import React from 'react';

const Card = (props)=>{


    return (<>   
        <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12 mx-auto "> 

        <div class="card">
      <img class="card-img-top" src={props.imgsrc} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    </>);
};



export default Card;