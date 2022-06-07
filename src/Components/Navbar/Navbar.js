import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar(){

  const [navbar, setNavbar] = React.useState(false);

  const changeBackround = () => {
    if(window.scrollY > 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackround);

  return(

    
      <div className={navbar ? "active-navbar" : "surface"}>
        <nav>
          <ul className="nav">
            <li><NavLink to="/women">WOMEN</NavLink></li>
            <li><NavLink to="/men">MEN</NavLink></li>
            <li><NavLink to="/kids">KIDS</NavLink></li>
          </ul>
        </nav> 
        <div className="logo">
          <img src="/Images/Icons/a-logo.svg" alt="CAN`T LOAD "/>
        </div>

          <ul className="nav--buttons">

          <li>
            <select name="currency" className="currency">
              <option value="usd">$ USD</option>
              <option value="eur">€ EUR</option>
              <option value="jpy">¥ JPY</option>
            </select>
          </li>
          <li><img src="/Images/Icons/empty-cart.svg" alt="CAN`T LOAD "></img></li>
    
        </ul>

      </div>
    

  )
}


export default Navbar;