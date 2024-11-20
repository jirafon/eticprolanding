// App.js
import React, { useState, useRef } from 'react';
import Analytics from './components/Analytics';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Description from './components/Description';
import Description1 from './components/Description1';
import Features from './components/Features';
import CardsPdm from './components/CardsPdm';
import CardsKb from './components/CardsKb';
import Cards from './components/Cards';

import Help from './components/Help';
import Centre from './components/centre';
import News from './components/News';
import Blog from './components/Blog';
import Partner from './components/Partner';

import Clients from './components/Clients';
import Chatbot from './components/Chat';
import CardsDr from './components/CardsDr';


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

    <div id="inicio" className="inicio" style={{ marginTop: '5%' }}>
      
      <Navbar handleContactClick={handleContactClick} handleAboutClick={handleAboutClick} />
      <Analytics />
      <Help />

      <Centre />
      

   
    
      {/* <Cards /> */}
    <Cards />
   
    <Clients />
    <Faq />
    <News />

    

      <Footer />
    
    </div>
    

    
  );
}

export default App;
