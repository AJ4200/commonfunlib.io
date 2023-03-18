import React from 'react';
import Navbar from './components/Navbar';
import './styles/Home.css';

function Homepage() {
  return (
    <>
      <header className='header'>
      Rando.io 
      <Navbar/>     
        </header>
      <footer className='footer'>Rando.io by JE Productions</footer>
    </>
  );
}

export default Homepage;
