import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboardButton from '../CopyToCliboard';

const WeightConversion = () => {
  const [weight, setWeight] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const weightOptions = [
    'kilogram', 'gram', 'milligram', 'microgram', 'tonne', 'pound', 'ounce'
  ];

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const handleWeightConversion = async () => {
    setLoading(true);
    const response = await axios.get('https://api-commonfunlib.onrender.com/convert/weight', {
      params: {
        weight: weight,
        fromUnit: fromUnit,
        toUnit: toUnit,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  return (
    <section>
      <h3>Weight Conversion</h3>
      <ul className='list'>
        <li>
          <label htmlFor='weight'>Weight:</label>
          <input className='lengthbar' type='text' id='weight' value={weight} onChange={handleWeightChange} />
        </li>
        <li>
          <label htmlFor='fromUnit'>From Unit:</label>
          <select className='selecttypeunits' id='fromUnit' value={fromUnit} onChange={handleFromUnitChange}>
            {weightOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor='toUnit'>To Unit:</label>
          <select className='selecttypeunits' id='toUnit' value={toUnit} onChange={handleToUnitChange}>
            {weightOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <button className='confirm' onClick={handleWeightConversion}>Convert</button>
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

export default WeightConversion;
