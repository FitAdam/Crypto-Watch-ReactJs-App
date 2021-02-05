import React from 'react';

function BoxComponent(props){
    return (
        <div className="box-component">
        <img 
      src= {props.photo}
      alt="new"
      />
            <h5>{props.name}</h5>
            <h5>£{props.price}</h5>
            
        </div>
    )

}


export default BoxComponent;