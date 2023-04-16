import React, { useState } from 'react';
import '../../styles/list.css';

const CopyToClipboardButton = ({ text }) => {

  const [Copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text); 
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);  
  }
  
  return (
    <button className='confirm' onClick={handleClick}> {Copied ? 'Copied' : 'Copy'}</button>
  );
};

export default CopyToClipboardButton;
