import React, { useState } from 'react';
import Typed from 'react-typed';
import LogoImage from '../assets/eticprologo1.png';
import unsplash from '../assets/carunsplash.jpg';

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNav(false); // Close the mobile menu after clicking the link
  };

  return (
    <div id="inicio" className="inicio">
      <div className='bg-white relative'>

      <div style={{ position: 'relative', paddingBottom: '39.375%', height: 0, overflow: 'hidden', width: '60%', top: '0%', left: '20%' }}>
  <iframe
    allow="autoplay; gyroscope;"
    allowfullscreen
    height="100%"
    referrerpolicy="strict-origin"
    src="https://www.kapwing.com/e/65931ff121b875ab8f832aa1"
    style={{ border: '0', height: '80%', left: '0%', position: 'absolute', top: '20%', width: '80%' }}
    title="Eticpro- Que es?"
    width="100%"
  ></iframe>
</div>





<div className="absolute top-40 right-10 mt-11 ml-16 text-white text-6xl font-serif" style={{ fontSize: '180%' }}>
          <div className="flex">
            <div className="bg-blue-500 rounded-full p-4 mr-4">
              <p>Procesos</p>
            </div>
           
          </div>
          <div className="flex mt-4">
            <div className="bg-black rounded-full p-4 mr-4">
              <p>Compliance</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="bg-blue-500 rounded-full p-4">
              <p>Automatizados</p>
            </div>
          </div>
      
          <div className="flex mt-4">
            <div className="bg-cyan-800 rounded-full p-4">
              <p>Una sola Herramienta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
