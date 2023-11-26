import React, { useState } from 'react';
import LogoImage from '../assets/eticprologo1.png';

const Footer = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showAffiliateModal, setShowAffiliateModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);

  const handleLegalClick = () => {
    setShowTermsModal(true);
  };

  const handleRespoClick = () => {
    setShowPrivacyModal(true);
  };

  const handleAffiliateClick = () => {
    setShowAffiliateModal(true);
  };

  const handleFAQClick = () => {
    setShowFAQModal(true);
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);
    setShowPrivacyModal(false);
    setShowAffiliateModal(false);
    setShowFAQModal(false);
  };

  const faqData = [
    {
      question: '¿Cuál es el costo del servicio?',
      answer: 'El costo del servicio varía según el plan que elija. Ofrecemos diferentes planes de precios para adaptarse a las necesidades de su empresa. Puede encontrar más detalles en nuestra sección de precios en el sitio web.'
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos tarjetas de crédito principales, como Visa, MasterCard y American Express. También ofrecemos opciones de pago a través de PayPal y transferencia bancaria.'
    },
  
    {
      question: '¿Cómo puedo obtener soporte técnico?',
      answer: 'Ofrecemos soporte técnico las 9-18 horas del día, Lunes a Viernes días de la semana, a través de chat en vivo, correo electrónico y teléfono. Nuestro equipo de soporte está listo para ayudarlo con cualquier problema o consulta que pueda tener.'
    }
  ];

  return (
    <div className='max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
      <div>
        <img src={LogoImage} alt='Eticpro' className='w-32 h-20 mb-4' />
        <p className='mb-4'>Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños. 
        Nuestra misión es brindar las herramientas necesarias para mantener el cumplimiento normativo sin complicaciones y minimizar los riesgos asociados.</p>
        <p>Contacto: <a href="mailto:hello@eticpro.com" className="text-[#00df9a]">hello@eticpro.com</a></p>
      </div>
      <div className="text-center">
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
          <li className='py-2 text-sm' onClick={handleRespoClick}>Privacidad de Datos</li>
          <li className='py-2 text-sm' onClick={handleLegalClick}>Términos y Condiciones</li>
        </ul>
      </div>

      {/* Modals go here */}

    </div>
  );
};

export default Footer;
