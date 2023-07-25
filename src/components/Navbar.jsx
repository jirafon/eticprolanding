import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    window.location.replace('https://compliax.onrender.com');
  };



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black-800'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Eticpro</h1>
      <ul className='hidden md:flex mx-auto'>
        <li className='p-4'>Inicio</li>
        <li className='p-4'>Acerca</li>
        <li className='p-4'>Contacto</li>
        <li className='p-4 menu-item-box'>
          <button className='border-b-2 border-black-800 nav-button' onClick={handleLogin}>Entrar</button>
        </li>
     
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Cumpliax</h1>
        <li className='p-4 border-b border-gray-600'>Inicio</li>
        <li className='p-4 border-b border-gray-600'>Acerca</li>
        <li className='p-4'>Contacto</li>
        <li className='p-4 menu-item-box'>
          <button className='border-b-2 border-black-800 nav-button' onClick={handleLogin}>Entrar</button>
        </li>
      
      </ul>
    </div>
  );
};

export default Navbar;
