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
    const response = await axios.get(`http://localhost:8080/common-functions?type=${functionType}&input1=${input1}&input2=${input2}`);
    setResult(response.data.result);
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
          <option value='isEven'>Is Even</option>
          <option value='isOdd'>Is Odd</option>
          <option value='factorial'>Factorial</option>
          <option value='gcd'>GCD</option>
          <option value='lcm'>LCM</option>
          <option value='isPrime'>Is Prime</option>
          <option value='swapVariableValue'>Swap Variable Value</option>
          <option value='reverseString'>Reverse String</option>
        </select>
        <input
          type='text'
          className='minmax'
          value={input1}
          onChange={handleInput1Change}
          placeholder='Enter input 1'
        />
        <input
          type='text'
          className='minmax'
          value={input2}
          onChange={handleInput2Change}
          placeholder='Enter input 2 (if applicable)'
        />
        <button className='confirm' onClick={handleComputeFunction}>
          Compute
        </button>
        <CopyToClipboardButton text={result} />
        <p>{loading ? 'Loading...' : result || 'No result computed yet.'}</p>
      </section>
    </div>
  );
}

export default CommonFunctionslist;