import React, { useState } from 'react';
import axios from 'axios';
import '../styles/list.css';
import CopyToClipboardButton from './api/CopyToCliboard';

function CommonFunctionslist() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleFunctionTypeChange = (event) => {
    setFunctionType(event.target.value);
  };

  const handleComputeFunction = async () => {
    setLoading(true);
    let apiUrl = `https://api-commonfunlib.onrender.com/common/`;

    if (functionType === 'even' || functionType === 'odd') {
      apiUrl += `${functionType}?num=${input1}`;
    } else if (functionType === 'factorial' || functionType === 'reverse') {
      apiUrl += `${functionType}?num=${input1}`;
    } else if (functionType === 'gcd' || functionType === 'lcm') {
      apiUrl += `${functionType}?a=${input1}&b=${input2}`;
    } else if (functionType === 'prime') {
      apiUrl += `${functionType}?num=${input1}`;
    }

    const response = await axios.get(apiUrl);
    setResult(response.data[functionType]);
    setLoading(false);
  };

  return (
    <div className='sect'>
      <section>
        <ul className='list'>
          <li>isEven: Checks if a number is even.</li>
          <li>isOdd: Checks if a number is odd.</li>
          <li>factorial: Calculates the factorial of a number.</li>
          <li>gcd: Calculates the greatest common divisor (GCD) of two numbers.</li>
          <li>lcm: Calculates the least common multiple (LCM) of two numbers.</li>
          <li>isPrime: Checks if a number is prime.</li>
          <li>swapVariableValue: Swaps the values of two variables.</li>
          <li>reverseString: Reverses a string.</li>
        </ul>
      </section>
      <section className='sect2'>
        <h3>Compute Function</h3>
        <select className='selecttype' value={functionType} onChange={handleFunctionTypeChange}>
          <option value=''>Select function type</option>
          <option value='even'>Is Even</option>
          <option value='odd'>Is Odd</option>
          <option value='factorial'>Factorial</option>
          <option value='gcd'>GCD</option>
          <option value='lcm'>LCM</option>
          <option value='prime'>Is Prime</option>
          <option value='reverse'>Reverse String</option>
        </select>
        <input
          type='text'
          className='minmax'
          value={input1}
          onChange={handleInput1Change}
          placeholder='Enter input 1'
        />
        {functionType === 'gcd' || functionType === 'lcm' ? (
          <input
            type='text'
            className='minmax'
            value={input2}
            onChange={handleInput2Change}
            placeholder='Enter input 2'
          />
        ) : null}
        <button className='confirm' onClick={handleComputeFunction}>
          Compute
        </button>
        <CopyToClipboardButton text={result} />
        <p>{loading ? 'Loading...' : (result !== undefined ? `Result: ${result}` : 'No result computed yet.')}</p>
      </section>
    </div>
  );
}

export default CommonFunctionslist;
