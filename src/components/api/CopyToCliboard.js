import React from 'react';
import '../../styles/list.css';

const CopyToClipboardButton = ({ text }) => {

  const handleClick = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <button className='confirm' onClick={handleClick}>Copy</button>
  );
};

export default CopyToClipboardButton;
