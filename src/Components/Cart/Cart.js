import React, from "react";
import "./Cart.css";

function Cart(){
  return(
    
  <div className="cart-menu">
  <header className="cart-header">
    <p className="cart-title"><b>My Bag, </b><span>2</span> items</p>
  </header>

  <main className="cart-products">
    <div className="cart-item">
      <img src="img/items/item1.png" alt="CAN`T LOAD"/>

      <div className="item-counter">
        <button className="item-counter-button" data-action = "plus">+</button>
        <div id="count-el" data-counter>1</div>
        <button className="item-counter-button" data-action = "minus">-</button>
      </div>

      <p>Apollo Running Short</p>

      <div className="cart-item-price">$<span id="first-price">50.00</span></div>

      <div className="size-buttons">
        <button>S</button>
        <button className="not-available">M</button>
      </div>

    </div>

  </main>

  <footer className="cart-footer">
    <div className="total-price-container">
      <div>Total</div>
      <div>$<span id="total-price">0.00</span></div>
    </div>

    <div className="cart-menu-buttons">
      <button className="cart-menu-button view-bag">view bag</button>
      <button className="cart-menu-button check-out">check out</button>
    </div>
  </footer>


</div>
  )
}

export default Cart;