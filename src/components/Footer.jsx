import React, { useState } from 'react';
import LogoImage from '../assets/eticprologo1.png';
import LinkedInLogo from '../assets/linkedinlogo.png'; // Assuming you have a LinkedIn logo image

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
        <p className='mb-4'>
          Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños.
          Nuestra misión es brindar las herramientas necesarias para mantener el cumplimiento normativo sin complicaciones y minimizar los riesgos asociados.
        </p>
        <p>Contacto: <a href="mailto:hello@eticpro.com" className="text-[#00df9a]">hello@eticpro.com</a></p>
        <p>Wsup: <a href="mailto:hello@eticpro.com" className="text-[#00df9a]">+56 96848 4088, +56 97765 7352</a></p>
        <button onClick={handleRespoClick} className="text-white bg-black mt-4 px-4 py-2 rounded-md">Política de Privacidad</button>
      </div>
      <div className="text-center">
        <a href="https://cl.linkedin.com/company/eticpro" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="cursor-pointer" />
        </a>
        <div className="text-center text-gray-500 mt-8">
        Copyright © Eticpro 2024 Derechos Reservados
      </div>
      </div>
    
      {/* Modals */}
      {showPrivacyModal && (
        <div className='modal fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 z-50'>
          <div className='modal-content bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative overflow-y-auto max-h-[80vh]'>
            <button
              className='close text-black text-2xl absolute top-4 right-4 font-bold cursor-pointer z-50'
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-2 text-center">
              Política de Privacidad
            </h2>
            <div className='text-justify space-y-4'>
  <p>
    El acceso a determinados servicios que se ofrecen en el sitio puede requerir el ingreso de datos personales, a saber: dirección de e-mail, nombre, apellido, domicilio completo, tipo y número de documento y otros datos opcionales, o cualquier otra información que permita individualizarlo. En todos los casos que usted brinde información personal, y de acuerdo a la legislación vigente, usted declara que la información brindada es cierta.
  </p>
  <p>
    Los datos que usted ingrese al Sitio se utilizarán para: envío de información de Productos y servicios, reporte de Irregularidades, análisis e investigaciones, Compliance, Asesoramiento legal, aplicaciones de servicios de proceso de negociación y gestión de reclamos previo a la judicialización, sistemas de comunicación internos y externos, obtener estadísticas.
  </p>
  <p>
    El ingreso de datos personales al Sitio por parte de los usuarios es voluntario, sin embargo, Eticpro manifiesta que su ingreso facilitará el uso de los servicios que ofrece y la relación con los usuarios. En los casos en que usted nos brinde su información personal, usted acepta y presta su consentimiento libre, expreso e informado para que dicha información personal sea utilizada en su propio beneficio optimizando la calidad del servicio que le ofrecemos a fin de mantenerlo informado de posibles cambios, y autoriza a que la misma sea tratada, almacenada, recopilada en la base de datos de la compañía.
  </p>
  <p>
    Eticpro garantiza a los usuarios que ingresen sus datos en el Sitio, que los mismos serán encriptados para preservar la seguridad, integridad y confidencialidad de los datos considerados como personales. Eticpro realiza todos los esfuerzos necesarios para evitar su adulteración, pérdida, consulta o tratamiento no autorizado, que permitan detectar desviaciones, intencionales o no, de información, ya sea que los riesgos provengan de la acción humana o del medio técnico utilizado. Para ello, notificamos de nuestras prácticas de privacidad, y las alternativas sobre la manera que su información es recopilada y utilizada.
  </p>
  <p>
    El sistema de encriptado implica que los datos solo podrán ser interpretados por Eticpro y ningún intermediario tendrá acceso a la información.
  </p>
  <p>
    El usuario podrá acceder a sus datos de carácter personal, rectificarlos, cancelarlos u oponerse a su tratamiento, mediante notificación al responsable de la base de datos hello@eticpro.com (LATAM)
  </p>
  <p>
    Eticpro no cederá esta información con terceros. No obstante, Eticpro podrá enviar a sus usuarios ofertas promocionales o comunicados especiales, donde el usuario siempre tendrá la opción de solicitar dejar de recibirlos.
  </p>
  <p>
    El usuario responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose Eticpro el derecho de excluir a todo usuario que haya facilitado datos falsos, sin perjuicio de iniciar acciones legales.
  </p>
  <p>
    Eticpro se reserva el derecho de brindar información a organismos de control de cualquier país y/o autoridades judiciales que así lo requieran y cuando medien razones fundadas relativas a la seguridad pública, la defensa nacional o la salud pública.
  </p>
</div>

          </div>
     
        </div>
        
      )}
          
    </div>
    
  );
};

export default Footer;
