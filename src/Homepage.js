import React, { useState } from "react";
import CommonFunctionslist from "./components/CommonFunList";
import Generatorlist from "./components/Generatorlist";
import Hashinglist from "./components/HashingList";
import Line from "./components/line";
import ApiInfo from "./components/apiInfo";
import "./styles/Home.css";
import "./styles/loader.css";
import "./styles/Navbar.css";
import "./styles/Container.css";
import "./styles/tooltip.css"
import Converterlist from "./components/Converterlist";
import Hexloader from "./components/hexloader";

function Homepage() {
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);

  const handleHover1 = () => setShowTooltip1(true);
  const handleLeave1 = () => setShowTooltip1(false);

  const handleHover2 = () => setShowTooltip2(true);
  const handleLeave2 = () => setShowTooltip2(false);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // Simulate a 5-second loading time
  }, []);

  const [showapiInfo, setShowapiInfo] = useState(false);

  const handleToggleBackbody = () => {
    setShowapiInfo((prevState) => !prevState);
  };

  const [showPopup, setShowPopup] = useState(false);

  const downloadFile = () => {
    // Code to download the file goes here
    const filePath = require('./assets/CommonFunLib.zip');
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CommonFunLib.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const redirectToSite = () => {
    // Code to redirect to the site goes here
    window.location.href = "https://github.com/AJ4200/CommonFunLib/archive/refs/heads/master.zip";
  };

  return (
    <div>
      {loading ? (
<Hexloader/>
      ) : (
        <>
          <header className="header">
            <div className="navbar">
              <h1>CommonFunLib</h1>
              <p>(beta)</p>
              <input
                className="searchbar"
                type="search"
                id="search"
                name="search"
              ></input>
              <button type="submit" className="searchbarbut">
                Go
              </button>
              <div style={{ position: "relative" }}>
                <button
                  className="navbutton"
                  onClick={() => setShowPopup(!showPopup)}
                >
                  Download
                </button>
              </div>
              <button
                className="navbutton"
                onMouseEnter={handleHover1}
                onMouseLeave={handleLeave1}
              >
                Javascript
              </button>

              <button
                className="navbutton"
                onMouseEnter={handleHover2}
                onMouseLeave={handleLeave2}
              >
                Flutter
              </button>

              <button className="navbutton" onClick={handleToggleBackbody}>
                {showapiInfo ? "Close API" : "API"}
              </button>
            </div>
          </header>

          {showPopup && (
            <div className="popup">
              <div className="popup-option content" onClick={downloadFile}>
                Library Files
              </div>
              <div className="popup-option content" onClick={redirectToSite}>
                Source Code
              </div>
            </div>
          )} 
                   {showTooltip2 && (
            <div className="tooltip">
              Dart(Flutter) Library is still under development
            </div>
          )}
          {showTooltip1 && (
            <div className="tooltip">
              Javascript Library is still under development
            </div>
          )}
          <div className="container">
            {showapiInfo && <ApiInfo />}
            <div
              className={`backbody ${showapiInfo ? "slide-out" : "slide-in"}`}
            >
              <h1>CommonFunLib Java Library</h1>
              <Line />
              <h2 className="content">CommonFunctions</h2>
              <Line />
              <p className="para">
                The CommonFunctions class provides a collection of commonly used
                functions for performing mathematical operations and
                manipulating variables and strings. The following functions are
                available:
              </p>
              <CommonFunctionslist />
              <Line />
              <h2 className="content">Generator</h2>
              <Line />
              <p className="para">
                The Generator class provides functions for generating random
                numbers and names. The following functions are available:
              </p>
              <Generatorlist />
              <Line />
              <h2 className="content">Converting</h2>
              <Line />
              <p className="para">
                This Java class provides an implementation of converting
                functions:
              </p>
              <Converterlist/>
              <Line />
              <h2 className="content">Hashing</h2>
              <Line />
              <p className="para">
                This Java class provides an implementation of common hashing
                functions:
              </p>
              <Hashinglist />        
            </div>
            {showapiInfo && <ApiInfo />}
          </div>

          <footer className="footer">
            CommonFunLib(beta) by JE Productions
          </footer>
        </>
      )}
    </div>
  );
}

export default Homepage;
