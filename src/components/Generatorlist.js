import React, { useState } from 'react';
import axios from 'axios';
import '../styles/list.css';
import CopyToClipboardButton from './api/CopyToCliboard';

function Generatorlist() {
    
  // States for generatePassword
  const [passwordLength, setPasswordLength] = useState('');
  const [password, setPassword] = useState('');
  // States for generateRandomName
  const [randomName, setRandomName] = useState('');
  // States for generateRandomNumber
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [randomNumber, setRandomNumber] = useState('');

  const [loading, setLoading] = useState(false);

  // Event handlers
  const handlePasswordLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const handleGeneratePassword = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8080/generatePassword?length=${passwordLength}`
    );
    setPassword(response.data.password);
    setLoading(false);
  };

  const handleGenerateRandomName = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:8080/generateRandomName`);
    setRandomName(response.data.name);
    setLoading(false);
  };

  const handleGenerateRandomNumber = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8080/generateRandomNumber?min=${minValue}&max=${maxValue}`
    );
    setRandomNumber(response.data.number);
    setLoading(false);
  };

  return (
    <div className='sect'>
      <section>
        <ul className='list'>
          <li>generateRandomName: Generates a random name by combining a random first name with a random last name.</li>
          <li>generateRandomNumber: Generates a random number between a minimum and maximum value.</li>
          <li>generatePassword: Returns auto generate password based on length given.</li>
        </ul>
      </section>
      <section className='sect2'>
        <section>
          <h3>Generate Password</h3>
          <input
            type='text'
            className='lengthbar'
            value={passwordLength}
            onChange={handlePasswordLengthChange}
            placeholder='Enter desired password length'
          />
          <button className='confirm' onClick={handleGeneratePassword}>
            Generate
          </button>
          <CopyToClipboardButton text={password} />
          <p>{loading ? 'Loading...' : password || 'No password generated yet.'}</p>
        </section>
        <section>
          <h3>Generate Random Name</h3>
          <button className='confirm' onClick={handleGenerateRandomName}>
            Generate
          </button>
          <CopyToClipboardButton text={randomName} />
          <p>{loading ? 'Loading...' : randomName || 'No random name generated yet.'}</p>
        </section>
        <section>
          <h3>Generate Random Number</h3>
          <input
            type='text'
            className='minmax'
            value={minValue}
            onChange={handleMinValueChange}
            placeholder='Enter minimum value'
          />
          <input
            type='text'
            className='minmax'
            value={maxValue}
            onChange={handleMaxValueChange}
            placeholder='Enter maximum value'
          />
          <button className='confirm' onClick={handleGenerateRandomNumber}>
            Generate
          </button>
          <CopyToClipboardButton text={randomNumber} />
          <p>{loading ? 'Loading...' : randomNumber || 'No random number generated yet.'}</p>
        </section>
      </section>
    </div>
  );
}

export default Generatorlist;