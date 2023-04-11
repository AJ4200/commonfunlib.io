
import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../styles/tooltip.css';


function Navbar() {

  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);

  const handleHover1 = () => setShowTooltip1(true);
  const handleLeave1 = () => setShowTooltip1(false);

  const handleHover2 = () => setShowTooltip2(true);
  const handleLeave2 = () => setShowTooltip2(false);

  
  return (

    <div className="navbar">
                  <h1>CommonFunLib</h1>
            <p>(beta)</p>
      <input className="searchbar" type="search" id="search" name="search" ></input>
      <button type="submit" className="searchbarbut">Go</button>
      <button className="navbutton">
        Java
      </button>

      <button className="navbutton" 
             onMouseEnter={handleHover1}
             onMouseLeave={handleLeave1}>
        Javascript
      </button>
      {showTooltip1 && <div className="tooltip">Javascript Library is still under development</div>}

      <button className="navbutton" 
                   onMouseEnter={handleHover2}
                   onMouseLeave={handleLeave2}>
        Flutter
      </button>
      {showTooltip2 && <div className="tooltip">Dart(Flutter) Library is still under development</div>}
   
    </div>

  );

}



export default Navbar;