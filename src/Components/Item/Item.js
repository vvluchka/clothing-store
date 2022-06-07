import React from "react";
import "./Item.css";


function Item(props){ 

  return(

    <div className="grid-element">
      <img src={props.item.coverImage} alt="CAN`T LOAD"/>
      <img className="add-to-cart" src="/Images/Icons/add-to-cart.svg" alt="CAN`T LOAD"></img>
      <h1 className="item-name">{props.item.name}</h1>
      <p className=" price">{props.item.price}</p>
    </div>

  
  )
}

export default Item;