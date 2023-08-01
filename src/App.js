import React, { useState, useRef } from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contacto from './components/Newsletter';
import About from './components/About';
import Description from './components/Description';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const aboutRef = useRef(null);

  const handleContactClick = () => {
    setShowNewsletter(true);
    setAnimationClass('animate__slideInRight'); // or 'animate__slideInLeft' for left animation
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar handleContactClick={handleContactClick} handleAboutClick={handleAboutClick} />
      <Hero />
      <Analytics />
      <Description />

      <Cards />
      <Contacto />
      <About />
      <Footer />
    </div>
  );
}

export default App;
