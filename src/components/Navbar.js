
import React from "react";
import '../styles/Navbar.css';
import '../styles/tooltip.css';


function Navbar() {

  return (

    <div className="navbar">
      <input className="searchbar" type="search" id="search" name="search" ></input>
      <button type="submit" className="searchbarbut">Go</button>
      <button className="navbutton">
        Java
      </button>

      <button className="navbutton" >
        Javascript
      </button>
      <button className="navbutton" >
        Flutter
      </button>

      <button className="navbutton">
        API
      </button>
    </div>

  );

}



export default Navbar;