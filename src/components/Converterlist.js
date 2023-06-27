import React, { useState } from 'react';
import axios from 'axios';
import '../styles/list.css';
import CopyToClipboardButton from './api/CopyToCliboard';

function Converterlist() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [length, setLength] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');
  const [temperatureFromUnit, setTemperatureFromUnit] = useState('');
  const [temperatureToUnit, setTemperatureToUnit] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleTemperatureFromUnitChange = (event) => {
    setTemperatureFromUnit(event.target.value);
  };

  const handleTemperatureToUnitChange = (event) => {
    setTemperatureToUnit(event.target.value);
  };

  const handleCurrencyConversion = async () => {
    setLoading(true);
    const response = await axios.get(`https://api-commonfunlib.onrender.com/convert/currency`, {
      params: {
        amount: amount,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  const handleLengthConversion = async () => {
    setLoading(true);
    const response = await axios.get(`https://api-commonfunlib.onrender.com/convert/length`, {
      params: {
        length: length,
        fromUnit: fromUnit,
        toUnit: toUnit,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  const handleWeightConversion = async () => {
    setLoading(true);
    const response = await axios.get(`https://api-commonfunlib.onrender.com/convert/weight`, {
      params: {
        weight: weight,
        fromUnit: fromUnit,
        toUnit: toUnit,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  const handleTemperatureConversion = async () => {
    setLoading(true);
    const response = await axios.get(`https://api-commonfunlib.onrender.com/convert/temperature`, {
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
    <div className='sect'>
      <section>
        <ul className='list'>
          <li>Currency Conversion</li>
          <li>
            <label htmlFor='amount'>Amount:</label>
            <input type='text' id='amount' value={amount} onChange={handleAmountChange} />
          </li>
          <li>
            <label htmlFor='fromCurrency'>From Currency:</label>
            <input type='text' id='fromCurrency' value={fromCurrency} onChange={handleFromCurrencyChange} />
          </li>
          <li>
            <label htmlFor='toCurrency'>To Currency:</label>
            <input type='text' id='toCurrency' value={toCurrency} onChange={handleToCurrencyChange} />
          </li>
          <li>
            <button onClick={handleCurrencyConversion}>Convert</button>
            {loading && <span>Loading...</span>}
            {result && <span>Result: {result}</span>}
          </li>
          <li>
            <CopyToClipboardButton text={result} />
          </li>
        </ul>
      </section>
      <section>
        <ul className='list'>
          <li>Length Conversion</li>
          <li>
            <label htmlFor='length'>Length:</label>
            <input type='text' id='length' value={length} onChange={handleLengthChange} />
          </li>
          <li>
            <label htmlFor='fromUnit'>From Unit:</label>
            <input type='text' id='fromUnit' value={fromUnit} onChange={handleFromUnitChange} />
          </li>
          <li>
            <label htmlFor='toUnit'>To Unit:</label>
            <input type='text' id='toUnit' value={toUnit} onChange={handleToUnitChange} />
          </li>
          <li>
            <button onClick={handleLengthConversion}>Convert</button>
            {loading && <span>Loading...</span>}
            {result && <span>Result: {result}</span>}
          </li>
          <li>
            <CopyToClipboardButton text={result} />
          </li>
        </ul>
      </section>
      <section>
        <ul className='list'>
          <li>Weight Conversion</li>
          <li>
            <label htmlFor='weight'>Weight:</label>
            <input type='text' id='weight' value={weight} onChange={handleWeightChange} />
          </li>
          <li>
            <label htmlFor='fromUnit'>From Unit:</label>
            <input type='text' id='fromUnit' value={fromUnit} onChange={handleFromUnitChange} />
          </li>
          <li>
            <label htmlFor='toUnit'>To Unit:</label>
            <input type='text' id='toUnit' value={toUnit} onChange={handleToUnitChange} />
          </li>
          <li>
            <button onClick={handleWeightConversion}>Convert</button>
            {loading && <span>Loading...</span>}
            {result && <span>Result: {result}</span>}
          </li>
          <li>
            <CopyToClipboardButton text={result} />
          </li>
        </ul>
      </section>
      <section>
        <ul className='list'>
          <li>Temperature Conversion</li>
          <li>
            <label htmlFor='temperature'>Temperature:</label>
            <input type='text' id='temperature' value={temperature} onChange={handleTemperatureChange} />
          </li>
          <li>
            <label htmlFor='temperatureFromUnit'>From Unit:</label>
            <input type='text' id='temperatureFromUnit' value={temperatureFromUnit} onChange={handleTemperatureFromUnitChange} />
          </li>
          <li>
            <label htmlFor='temperatureToUnit'>To Unit:</label>
            <input type='text' id='temperatureToUnit' value={temperatureToUnit} onChange={handleTemperatureToUnitChange} />
          </li>
          <li>
            <button onClick={handleTemperatureConversion}>Convert</button>
            {loading && <span>Loading...</span>}
            {result && <span>Result: {result}</span>}
          </li>
          <li>
            <CopyToClipboardButton text={result} />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Converterlist;
