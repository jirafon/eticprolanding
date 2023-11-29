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
        <div
          className="w-full h-screen mx-auto text-center flex flex-col items-start"
          style={{
            backgroundImage: `url(${unsplash})`,
            backgroundSize: 'auto 140%',
            backgroundPosition: 'center',
          }}
        ></div>

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
              <p>UNA sola Herramienta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
