import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboardButton from '../CopyToCliboard';

const LengthConversion = () => {
  const [length, setLength] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const lengthOptions = [
    'meter', 'kilometer', 'centimeter', 'millimeter', 'micrometer', 'nanometer',
    'mile', 'yard', 'foot', 'inch'
  ];

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const handleLengthConversion = async () => {
    setLoading(true);
    const response = await axios.get('https://api-commonfunlib.onrender.com/convert/length', {
      params: {
        length: length,
        fromUnit: fromUnit,
        toUnit: toUnit,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  return (
    <section>
      <h3>Length Conversion</h3>
      <ul className='list'>
        <li>
          <label htmlFor='length'>Length:</label>
          <input className='lengthbar' type='text' id='length' value={length} onChange={handleLengthChange} />
        </li>
        <li>
          <label htmlFor='fromUnit'>From Unit:</label>
          <select className='selecttypeunits' id='fromUnit' value={fromUnit} onChange={handleFromUnitChange}>
            {lengthOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor='toUnit'>To Unit:</label>
          <select className='selecttypeunits' id='toUnit' value={toUnit} onChange={handleToUnitChange}>
            {lengthOptions.map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </li>
        <li>
          <button className='confirm' onClick={handleLengthConversion}>Convert</button>
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

export default LengthConversion;
