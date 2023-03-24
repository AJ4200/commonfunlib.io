import React from 'react';
import Line from './components/line';
import Navbar from './components/Navbar';
import './styles/Home.css';
import './styles/loader.css';


async function fetchData() {
  try {
    const response = await fetch('http://localhost:8080/generatePassword?length=8');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }

}

function Homepage() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate a 2-second loading time
  }, []);

  
  return (
    (
      <div>
        {loading ? (

          <div class="socket">
            <div class="gel center-gel">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c1 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c2 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c3 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c4 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c5 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c6 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c7 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c8 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c9 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c10 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c11 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c12 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c13 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c14 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c15 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c16 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c17 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c18 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c19 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c20 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c21 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c22 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c23 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c24 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c25 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c26 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c28 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c29 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c30 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c31 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c32 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c33 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c34 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c35 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c36 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c37 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

          </div>

        ) : (
          <><header className='header'>
            <Navbar />
          </header>
            <div className='backbody'>
              {fetchData}

              <h1 className='content'>CommonFunLib Java Library</h1>

              <Line />
              <h2 className='content'>CommonFunctions</h2>
              <Line />
              <p className='para'>

                The CommonFunctions class provides a collection of commonly used functions for performing mathematical operations and manipulating variables and strings. The following functions are available:</p>

              <ul className='list'>
                <li>
                  isEven: Checks if a number is even.
                </li>
                <li>
                  isOdd: Checks if a number is odd.
                </li>
                <li>
                  factorial: Calculates the factorial of a number.
                </li>
                <li>
                  gcd: Calculates the greatest common divisor (GCD) of two numbers.
                </li>
                <li>
                  lcm: Calculates the least common multiple (LCM) of two numbers.
                </li>
                <li>
                  isPrime: Checks if a number is prime.
                </li>
                <li>
                  swapVariableValue: Swaps the values of two variables.
                </li>
                <li>
                  reverseString: Reverses a string.
                </li>
              </ul>
              <Line />
              <h2 className='content'>Generator</h2>
              <Line />
              <p className='para'>

                The Generator class provides functions for generating random numbers and names. The following functions are available:</p>

              <ul className='list'>
                <li>
                  generateRandomName: Generates a random name by combining a random first name with a random last name.
                </li>
                <li>
                  generateRandomNumber: Generates a random number between a minimum and maximum value.
                </li>
                <li>
                  generatePassword: Returns auto generate password based on length given.
                </li>

              </ul>
              <Line />
              <h2 className='content'>Hashing</h2>
              <Line />
              <p className='para'>

                This Java class provides an implementation of common hashing functions:</p>

              <ul className='list'>
                <li>
                  md5: Computes the MD5 hash of a given input string.
                </li>
                <li>
                  sha1: Computes the SHA-1 hash of a given input string.
                </li>
                <li>
                  sha256: Computes the SHA-256 hash of a given input string.
                </li>
                <li>
                  sha512: Computes the SHA-512 hash of a given input string.
                </li>
              </ul>
            </div>


            <footer className='footer'>CommonFunLib(beta) by JE Productions</footer></>
        )}
      </div>
    ));
}

export default Homepage;
