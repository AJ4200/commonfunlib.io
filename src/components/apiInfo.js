import React from 'react';
import '../styles/Home.css';
import Line from './line';
import CopyToClipboardButton from './api/CopyToCliboard';

function apiInfo() {
  return (
    <div className='backbodyapi slide-inapi '>
      <h1 className='content'>CommonFunLib API [For All]</h1>
      <p className='para'>
        The CommonFunLib API is a collection of useful functions for common programming tasks. It includes functions for computing mathematical operations, generating random data, and hashing data.
      </p>
      <Line />
      <h2 className='content'>API Endpoints</h2>
      <Line />
      <ul>
        <li>
          <h3>Common Functions</h3>
          <p className='para'>
            The Common Functions endpoint provides functions for computing mathematical operations.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/common
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/common"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>type</code> (required): The type of function to compute. Possible values are <code>even</code>, <code>odd</code>, <code>factorial</code>, <code>gcd</code>, <code>lcm</code>, <code>prime</code>, and <code>reverse</code>.
            </li>
            <li>
              <code>num</code> (required): The input number for the function.
            </li>
            <li>
              <code>a</code> and <code>b</code> (required for <code>gcd</code> and <code>lcm</code> functions): The two input numbers for the functions that require two inputs.
            </li>
          </ul>
        </li>
        <li>
          <h3>Generator</h3>
          <p className='para'>
            The Generator endpoint provides functions for generating random data.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/generate
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/generate"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>type</code> (required): The type of random data to generate. Possible values are <code>name</code>.
            </li>
          </ul>
        </li>
        <li>
          <h3>Hashing</h3>
          <p className='para'>
            The Hashing endpoint provides functions for hashing data.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/hash
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/hash"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>type</code> (required): The type of hash function to use. Possible values are <code>md5</code>, <code>sha1</code>, <code>sha256</code>, and <code>sha512</code>.
            </li>
            <li>
              <code>input</code> (required): The input data to hash.
            </li>
          </ul>
        </li>
        <li>
          <h3>Currency Conversion</h3>
          <p className='para'>
            The Currency Conversion endpoint converts currency from one unit to another.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/convert/currency
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/convert/currency"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>amount</code> (required): The amount to convert.
            </li>
            <li>
              <code>fromCurrency</code> (required): The currency code to convert from (e.g., USD, EUR).
            </li>
            <li>
              <code>toCurrency</code> (required): The currency code to convert to (e.g., USD, EUR).
            </li>
          </ul>
        </li>
        <li>
          <h3>Length Conversion</h3>
          <p className='para'>
            The Length Conversion endpoint converts length from one unit to another.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/convert/length
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/convert/length"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>length</code> (required): The length to convert.
            </li>
            <li>
              <code>fromUnit</code> (required): The unit to convert from (e.g., cm, inch).
            </li>
            <li>
              <code>toUnit</code> (required): The unit to convert to (e.g., cm, inch).
            </li>
          </ul>
        </li>
        <li>
          <h3>Weight Conversion</h3>
          <p className='para'>
            The Weight Conversion endpoint converts weight from one unit to another.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/convert/weight
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/convert/weight"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>weight</code> (required): The weight to convert.
            </li>
            <li>
              <code>fromUnit</code> (required): The unit to convert from (e.g., kg, lb).
            </li>
            <li>
              <code>toUnit</code> (required): The unit to convert to (e.g., kg, lb).
            </li>
          </ul>
        </li>
        <li>
          <h3>Temperature Conversion</h3>
          <p className='para'>
            The Temperature Conversion endpoint converts temperature from one unit to another.
          </p>
          <p className='para'>
            <strong>Endpoint:</strong> https://api-commonfunlib.onrender.com/convert/temperature
            <CopyToClipboardButton text={"https://api-commonfunlib.onrender.com/convert/temperature"} />
          </p>
          <p>
            <strong>Parameters:</strong>
          </p>
          <ul className='list'>
            <li>
              <code>temperature</code> (required): The temperature to convert.
            </li>
            <li>
              <code>fromUnit</code> (required): The unit to convert from (e.g., Celsius, Fahrenheit).
            </li>
            <li>
              <code>toUnit</code> (required): The unit to convert to (e.g., Celsius, Fahrenheit).
            </li>
          </ul>
        </li>
      </ul>
      <p>
        For more information, please refer to the <a href="https://github.com/your-username/commonfunlibapi">CommonFunLib API documentation</a>.
      </p>
    </div>
  );
}

export default apiInfo;
