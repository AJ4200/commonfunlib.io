
import React from "react";
import '../styles/Navbar.css';
import '../styles/tooltip.css';


function Navbar() {

    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleMouseEnter = () => {
      setShowTooltip(true);
    }
  
    const handleMouseLeave = () => {
      setShowTooltip(false);
    }
    const [showDropdown, setShowDropdown] = React.useState(false);

    const btnJava = () => {
      setShowDropdown(!showDropdown);
    }
    const btnApi = () => {
        setShowDropdown(!showDropdown);
      }
    return (

        <div className="navbar">
             <input className="searchbar" type="search" id="search" name="search" ></input>
             <button type="submit" className="searchbarbut">Go</button>
                <button className="navbutton" onClick={btnJava}>
                   Java
                </button>
               
                <button className="navbutton" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Javascript
                </button>
                {showTooltip && <div className="tooltip">This feature is still under development!</div>}
                <button className="navbutton" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Flutter
                </button>
                
                <button className="navbutton" onClick={btnApi}>
                    API
                </button>
                {showDropdown && (
        <ul className="javalist">
          <li>About Java Library</li>
          <li>Usage</li>
          <li>Issues</li>
        </ul>

      )}
        {showDropdown && (
        <ul className="apilist">
          <li>About API</li>
          <li>Usage</li>
          <li>Issues</li>
        </ul>
        
      )}
        </div>
       
    );
    
}



export default Navbar;