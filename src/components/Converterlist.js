import React from 'react';
import '../styles/list.css';
import '../styles/custom-loader.css';
import CurrencyConversion from './api/converter/CurrencyConversion';
import LengthConversion from './api/converter/LengthConversion';
import WeightConversion from './api/converter/WeightConversion';
import TemperatureConversion from './api/converter/TemperatureConversion';

function Converterlist() {
  return (
    <div className='sect'>
      <CurrencyConversion />
      <LengthConversion />
      <WeightConversion />
      <TemperatureConversion />
    </div>
  );
}

export default Converterlist;
