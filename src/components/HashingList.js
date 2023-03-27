import React, { useState } from 'react';
import axios from 'axios';
import '../styles/list.css';
import CopyToClipboardButton from './api/CopyToCliboard';

function Hashinglist() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [hashType, setHashType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleHashTypeChange = (event) => {
    setHashType(event.target.value);
  };

  const handleComputeHash = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:8080/hash?type=${hashType}&input=${input}`);
    setHash(response.data.hash);
    setLoading(false);
  };

  return (
    <div className='sect'>
      <section>
        <ul className='list'>
          <li>md5: Computes the MD5 hash of a given input string.</li>
          <li>sha1: Computes the SHA-1 hash of a given input string.</li>
          <li>sha256: Computes the SHA-256 hash of a given input string.</li>
          <li>sha512: Computes the SHA-512 hash of a given input string.</li>
        </ul></section>

      <section className='sect2'>
        <h3>Compute Hash</h3>
        <select className='selecttype' value={hashType} onChange={handleHashTypeChange}>
          <option value=''>Select hash type</option>
          <option value='md5'>MD5</option>
          <option value='sha1'>SHA-1</option>
          <option value='sha256'>SHA-256</option>
          <option value='sha512'>SHA-512</option>
        </select>
        <input
          type='text'
          className='lengthbar'
          value={input}
          onChange={handleInputChange}
          placeholder='Enter input string'
        />
        <button className='confirm' onClick={handleComputeHash}>
          Compute
        </button>
        <CopyToClipboardButton text={hash} />
        <p>{loading ? 'Loading...' : hash || 'No hash computed yet.'}</p>
      </section>
    </div>
  );
}

export default Hashinglist;