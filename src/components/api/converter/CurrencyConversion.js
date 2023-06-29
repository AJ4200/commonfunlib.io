import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboardButton from '../CopyToCliboard';

const CurrencyConversion = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const currencyOptions = [
    'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP',
    'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN',
    'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB',
    'TRY', 'USD', 'ZAR'
  ];

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleCurrencyConversion = async () => {
    setLoading(true);
    const response = await axios.get('https://api-commonfunlib.onrender.com/convert/currency', {
      params: {
        amount: amount,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
      },
    });
    setResult(response.data.result);
    setLoading(false);
  };

  return (
    <section>
      <h3>Currency Conversion</h3>
      <ul className='list'>
        <li>
          <label htmlFor='amount'>Amount:</label>
          <input className='lengthbar' type='text' id='amount' value={amount} onChange={handleAmountChange} />
        </li>
        <li>
          <label htmlFor='fromCurrency'>From Currency:</label>
          <select className='selecttypeunits' id='fromCurrency' value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencyOptions.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor='toCurrency'>To Currency:</label>
          <select className='selecttypeunits' id='toCurrency' value={toCurrency} onChange={handleToCurrencyChange}>
            {currencyOptions.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </li>
        <li>
          <button className='confirm' onClick={handleCurrencyConversion}>Convert</button>
          {loading && <div className='custom-loader'></div>}
          {result && <span>Result: {result}</span>}
        </li>
        <li>
          <CopyToClipboardButton text={result} />
        </li>
      </ul>
    </section>
  );
}

export default CurrencyConversion;
