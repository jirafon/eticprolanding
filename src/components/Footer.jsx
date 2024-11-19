import React, { useState } from 'react';
import LogoImage from '../assets/eticprov5.png';
import LinkedInLogo from '../assets/socia-linkedin@2x.png'; // Ensure this path is correct
import WS from '../assets/social-whatsapp@2x.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PrivacyPolicyModal = ({ onClose }) => (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
    <div className='bg-black p-6 rounded-lg shadow-lg max-w-3xl w-full h-[80vh] relative overflow-y-auto'>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-2 text-center" style={{ color: 'white' }}>
        Política de Privacidad
      </h2>
      <div className='text-justify space-y-4' style={{ color: 'black' }}>
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
          El usuario podrá acceder a sus datos de carácter personal, rectificarlos, cancelarlos u oponerse a su tratamiento, mediante notificación al responsable de la base de datos hello@eticpro.com (LATAM).
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
      <button
        onClick={onClose}
        className='absolute top-2 right-2 text-xl'
        style={{ color: 'white' }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  </div>
);

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handlePrivacyClick = () => setShowPrivacyModal(true);
  const handleCloseModal = () => setShowPrivacyModal(false);

  return (
    <div className='footer w-full mx-auto py-8 px-4 grid lg:grid-cols-2 gap-8'>
      <div className='flex flex-col'>
        <img src={LogoImage} alt='Eticpro' className='w-40 h-26' />
        <p className='mb-4 text-white text-sm'>
          Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños.
          Nuestra misión es brindar las herramientas necesarias para mantener el cumplimiento normativo sin complicaciones y minimizar los riesgos asociados.
        </p>
        <a onClick={handlePrivacyClick} className="text-white text-xs cursor-pointer hover:underline" aria-label="Privacy Policy">
          Política de Privacidad
        </a>
        <p className='text-white text-xs mt-4'>
          Copyright © Eticpro 2024 Derechos Reservados
        </p>
      </div>
      <div className='flex flex-col items-start'>
        <p className='text-white text-lg font-bold'>
          <a href="mailto:hello@eticpro.com" className="text-white text-lg font-bold">hello@eticpro.com</a>
        </p>
        <p className='text-white text-lg font-bold flex items-center space-x-2'>
          <img src={WS} alt="WhatsApp Logo" className="w-6 h-6 cursor-pointer" aria-label="WhatsApp" />
          {/* Use the WhatsApp URL scheme to open a chat when clicked */}
               <a href="https://wa.me/56968484088" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-bold">
          +56 9 68484 088
          </a>
          <a href="https://wa.me/56977657352" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-bold">
          +56 9 77657 352,
          </a>
   
        </p>
        <div className="text-center mt-4 flex justify-center">
          <a href="https://cl.linkedin.com/company/eticpro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </div>

      {showPrivacyModal && <PrivacyPolicyModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Footer;
