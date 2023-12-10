import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoImage from '../assets/eticprologo1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    window.location.replace('https://compliax.onrender.com');
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
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-black-800 fixed top-0 z-10' style={{ backgroundColor: 'white', width: '100%' }}>
    <img src={LogoImage} alt='Eticpro' className='w-40 h-25' />
  
      <ul className='hidden md:flex mx-auto'>
        <li className='p-4'>
          <a href='#inicio' onClick={(e) => handleSmoothScroll(e, 'inicio')}>
            Inicio
          </a>
        </li>
        <li className='p-4'>
       
        </li>
        <li className='p-4'>
          <a href='#contacto' onClick={(e) => handleSmoothScroll(e, 'contacto')}>
            Contacto
          </a>
        </li>
        <li className='p-4 menu-item-box'>
        <button className='border-b-2 border-black-800 nav-button' style={{ width: '150px' }} onClick={handleLogin}>
  Entrar
</button>

        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Use inline style to set the background color based on `nav` state */}
      <ul
        style={{
          backgroundColor: 'white', // Establecer el color de fondo en blanco
          left: nav ? '0' : '-100%',
          width: '60%', // Ajustar el ancho según sea necesario
          textAlign: 'center', // Centrar el contenido
        }}
        className='fixed top-0 h-full border-r border-r-gray-900 ease-in-out duration-500 z-20'
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Eticpro</h1>
        <li className='p-4 border-b border-gray-600'>
          <a href='#inicio' onClick={(e) => handleSmoothScroll(e, 'inicio')}>
            Inicio
          </a>
        </li>
        <li className='p-4'>
          <a href='#about' onClick={(e) => handleSmoothScroll(e, 'about')}>
            Quienes Somos
          </a>
        </li>
        <li className='p-4'>
          <a href='#contacto' onClick={(e) => handleSmoothScroll(e, 'contacto')}>
            Contacto
          </a>
        </li>
        <li className='p-4 menu-item-box'>
          <button className='border-b-2 border-black-800 nav-button' onClick={handleLogin}>
            Entrar
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
