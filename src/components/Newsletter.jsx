import React, { useState } from 'react';
import axios from 'axios';

const Contacto = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailTemplate = `Hola,llego la siguiente solicitud \n\del contacto ${name},${phone},${company} \n\nGracias.`;
  
    try {
      await axios.post('https://unbiax-main-server.onrender.com/utils/emailcontacto4', JSON.stringify({
      emails: [email],
      emailTemplate,
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Solicitud de contacto enviada exitosamente!');
      setName('');
      setPhone('');
      setCompany('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Falló el envio del mail.');
    }
  };
  
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id="contacto" className="newsletter-container animate__animated animate__fadeIn">
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        {/* Left Column */}
        <div className='lg:col-span-2 my-4'>
          {/* Heading and Paragraph */}
          <h1 className='hidden sm:block md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Para comenzar contáctenos  aquí.
          </h1>
            <p className='hidden md:block'>Le contactaremos a la brevedad.</p>
        </div>
        <div className='my-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col w-full'>
          <input
  className={`p-3 rounded-md text-black mb-4 ${name ? 'input-orange-border' : ''}`}
  type='text'
  placeholder='Nombre'
  value={name}
  onChange={handleNameChange}
/>

<input
  className={`p-3 rounded-md text-black mb-4 ${phone ? 'input-orange-border' : ''}`}
  type='text'
  placeholder='Telefono'
  value={phone}
  onChange={handlePhoneChange}
/>

<input
  className={`p-3 rounded-md text-black mb-4 ${company ? 'input-orange-border' : ''}`}
  type='text'
  placeholder='Empresa'
  value={company}
  onChange={handleCompanyChange}
/>

<input
  className={`p-3 rounded-md text-black mb-4 ${email ? 'input-orange-border' : ''}`}
  type='email'
  placeholder='Email'
  value={email}
  onChange={handleEmailChange}
/>
  <button
    type='submit'
    className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'
    >
    Contactarme
  </button>
</div>
          </form>
          <p>
         
          </p>
        </div>
      </div>
    </div>
    </div>

  );
};


export default Contacto;
