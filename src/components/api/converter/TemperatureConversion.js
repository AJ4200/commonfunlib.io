import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboardButton from '../CopyToCliboard';

const TemperatureConversion = () => {
  const [temperature, setTemperature] = useState('');
  const [temperatureFromUnit, setTemperatureFromUnit] = useState('');
  const [temperatureToUnit, setTemperatureToUnit] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const temperatureOptions = [
    'Celsius', 'Fahrenheit', 'Kelvin'
  ];

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleTemperatureFromUnitChange = (event) => {
    setTemperatureFromUnit(event.target.value);
  };

  const handleTemperatureToUnitChange = (event) => {
    setTemperatureToUnit(event.target.value);
  };

  const handleTemperatureConversion = async () => {
    setLoading(true);
    const response = await axios.get('https://api-commonfunlib.onrender.com/convert/temperature', {
      params: {
        temperature: temperature,
        fromUnit: temperatureFromUnit,
        toUnit: temperatureToUnit,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  return (
    <section>
      <h3>Temperature Conversion</h3>
      <ul className='list'>
        <li>
          <label htmlFor='temperature'>Temperature:</label>
          <input className='lengthbar' type='text' id='temperature' value={temperature} onChange={handleTemperatureChange} />
        </li>
        <li>
          <label htmlFor='temperatureFromUnit'>From Unit:</label>
          <select className='selecttypeunits' id='temperatureFromUnit' value={temperatureFromUnit} onChange={handleTemperatureFromUnitChange}>
            {temperatureOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor='temperatureToUnit'>To Unit:</label>
          <select className='selecttypeunits' id='temperatureToUnit' value={temperatureToUnit} onChange={handleTemperatureToUnitChange}>
            {temperatureOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <button className='confirm' onClick={handleTemperatureConversion}>Convert</button>
          {loading && <span>Loading...</span>}
          {result && <span>Result: {result}</span>}
        </li>
        <li>
          <CopyToClipboardButton text={result} />
        </li>
      </ul>
    </section>
  );
}

export default TemperatureConversion;
