// App.js
import React, { useState, useRef } from 'react';
import Analytics from './components/Analytics';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Cards from './components/Cards';
import Help from './components/Help';
import Centre from './components/centre';
import News from './components/News';
import Clients from './components/Clients';

function App() {
  const aboutRef = useRef(null);

  const handleContactClick = () => {
    // Newsletter functionality can be added here if needed
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="inicio" className="inicio" style={{ marginTop: '5%' }}>
      <Navbar handleContactClick={handleContactClick} handleAboutClick={handleAboutClick} />
      <Analytics />
      <Help />
      <Centre />
      <Features />
      <About />
    <Cards />
    <Clients />
    <Faq />
    <News />
      <Footer />
    </div>
  );
}

export default App;
