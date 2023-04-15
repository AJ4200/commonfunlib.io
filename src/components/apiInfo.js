import React from 'react';
import '../styles/Home.css';
import Line from './line';

function apiInfo() {
  return (
    <div className='backbodyapi'>
      <Line/>
          <h1 className='content'>CommonFunLib-API</h1>
          <Line/>
    <p className='para'>
      The CommonFunLib API is a collection of useful functions for common programming tasks. It includes functions for computing mathematical operations, generating random data, and hashing data.
    </p>
    <Line/>
    <h2 className='content'>API Endpoints</h2>
    <Line/>
    <ul>
      <li >
        <h3>Common Functions</h3>
        <p className='para'>
          The Common Functions endpoint provides functions for computing mathematical operations.
        </p>
        <p className='para'>
          <strong>Endpoint:</strong> https://commonfunlibapi-apim.azure-api.net/common-functions
        </p>
        <p>
          <strong>Parameters:</strong>
        </p>
        <ul className='list'>
          <li>
            <code>type</code> (required): The type of function to compute. Possible values are <code>isEven</code>, <code>isOdd</code>, <code>factorial</code>, <code>gcd</code>, <code>lcm</code>, <code>isPrime</code>, <code>swapVariableValue</code>, and <code>reverseString</code>.
          </li>
          <li>
            <code>input1</code> (required): The first input parameter for the function.
          </li>
          <li>
            <code>input2</code> (optional): The second input parameter for the function (required for <code>gcd</code> and <code>lcm</code> functions).
          </li>
        </ul>
      </li>
      <li>
        <h3>Generator</h3>
        <p className='para'>
          The Generator endpoint provides functions for generating random data.
        </p>
        <p className='para'>
          <strong>Endpoint:</strong> https://commonfunlibapi-apim.azure-api.net/generatePassword
        </p>
        <p>
          <strong>Parameters:</strong>
        </p>
        <ul className='list'>
          <li>
            <code>length</code> (required): The length of the generated password.
          </li>
        </ul>
      </li>
      <li>
        <h3>Hashing</h3>
        <p className='para'>
          The Hashing endpoint provides functions for hashing data.
        </p>
        <p className='para'>
          <strong>Endpoint:</strong> https://commonfunlibapi-apim.azure-api.net/hash
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
    </ul>
    <p>
      For more information, please refer to the <a href="https://github.com/your-username/commonfunlibapi">CommonFunLib API documentation</a>.
    </p>
    </div>
  );
}

export default apiInfo;