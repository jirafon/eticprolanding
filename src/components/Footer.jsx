import React, { useState } from 'react';
import LogoImage from '../assets/eticprov5.png';
import LinkedInLogo from '../assets/socia-linkedin@2x.png';
import WS from '../assets/social-whatsapp@2x.png';
import { faTimes, faEnvelope, faPhone, faMapMarkerAlt, faShieldAlt, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrivacyPolicyModal = ({ onClose }) => (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'>
    <div className='bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full h-[85vh] relative overflow-y-auto mx-4'>
      <div className='sticky top-0 bg-white pb-4 border-b border-gray-200'>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Política de Privacidad
      </h2>
        <p className='text-gray-600'>Última actualización: Enero 2024</p>
      </div>
      <div className='text-gray-700 leading-relaxed space-y-6 mt-6'>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
          <h3 className='font-semibold text-blue-800 mb-2'>Información que Recopilamos</h3>
          <p>
            El acceso a determinados servicios que se ofrecen en el sitio puede requerir el ingreso de datos personales, 
            a saber: dirección de e-mail, nombre, apellido, domicilio completo, tipo y número de documento y otros datos 
            opcionales, o cualquier otra información que permita individualizarlo.
          </p>
        </div>
        
        <div>
          <h3 className='font-semibold text-gray-800 mb-2'>Uso de la Información</h3>
          <p>
            Los datos que usted ingrese al Sitio se utilizarán para: envío de información de Productos y servicios, 
            reporte de Irregularidades, análisis e investigaciones, Compliance, Asesoramiento legal, aplicaciones de 
            servicios de proceso de negociación y gestión de reclamos previo a la judicialización, sistemas de 
            comunicación internos y externos, obtener estadísticas.
          </p>
        </div>

        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
          <h3 className='font-semibold text-green-800 mb-2'>Seguridad y Protección</h3>
          <p>
            Eticpro garantiza a los usuarios que ingresen sus datos en el Sitio, que los mismos serán encriptados 
            para preservar la seguridad, integridad y confidencialidad de los datos considerados como personales. 
            El sistema de encriptado implica que los datos solo podrán ser interpretados por Eticpro.
          </p>
        </div>

        <div>
          <h3 className='font-semibold text-gray-800 mb-2'>Sus Derechos</h3>
          <p>
            El usuario podrá acceder a sus datos de carácter personal, rectificarlos, cancelarlos u oponerse a su 
            tratamiento, mediante notificación al responsable de la base de datos{' '}
            <a href="mailto:hello@eticpro.com" className='text-blue-600 hover:underline'>hello@eticpro.com</a> (LATAM).
          </p>
        </div>

        <div className='bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500'>
          <h3 className='font-semibold text-yellow-800 mb-2'>Información Importante</h3>
          <ul className='list-disc list-inside space-y-1'>
            <li>Eticpro no cederá esta información con terceros</li>
            <li>El usuario responderá de la veracidad de los datos facilitados</li>
            <li>Eticpro se reserva el derecho de brindar información a organismos de control cuando sea requerido</li>
          </ul>
        </div>
      </div>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'
        aria-label="Cerrar política de privacidad"
      >
        <FontAwesomeIcon icon={faTimes} className='text-2xl' />
      </button>
    </div>
  </div>
);

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handlePrivacyClick = () => setShowPrivacyModal(true);
  const handleCloseModal = () => setShowPrivacyModal(false);

  return (
    <footer className='bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden'>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className='relative max-w-7xl mx-auto py-16 px-4'>
        {/* Main Footer Content */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center mb-6'>
              <img src={LogoImage} alt='Eticpro' className='w-48 h-auto' />
            </div>
            <p className='text-gray-300 leading-relaxed mb-6 max-w-md'>
              Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños. 
              Nuestra misión es brindar las herramientas necesarias para mantener el cumplimiento normativo sin 
              complicaciones y minimizar los riesgos asociados.
            </p>
            <div className='flex space-x-4'>
              <a 
                href="https://cl.linkedin.com/company/eticpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110'
                aria-label="Síguenos en LinkedIn"
              >
                <img src={LinkedInLogo} alt="LinkedIn" className='w-5 h-5' />
              </a>
              <a 
                href="https://wa.me/56987375517" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 transform hover:scale-110'
                aria-label="Contáctenme por WhatsApp"
              >
                <img src={WS} alt="WhatsApp" className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <FontAwesomeIcon icon={faRocket} className='mr-2 text-blue-400' />
              Enlaces Rápidos
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href="#inicio" className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#aboutus" className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#planes" className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  Planes
                </a>
              </li>
              <li>
                <a href="#FAQ" className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-6 flex items-center'>
              <FontAwesomeIcon icon={faUsers} className='mr-2 text-blue-400' />
              Contacto
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-blue-400 mr-3 w-4' />
                <a 
                  href="mailto:hello@eticpro.com" 
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                >
                  hello@eticpro.com
                </a>
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faPhone} className='text-blue-400 mr-3 w-4' />
                <div className='space-y-1'>
                  <a 
                    href="https://wa.me/5698484088" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-gray-300 hover:text-white transition-colors duration-200 block'
                  >
          +56 9 848 40 88
          </a>
                  <a 
                    href="https://wa.me/56977657352" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-gray-300 hover:text-white transition-colors duration-200 block'
                  >
                    +56 9 77657 352
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-6'>
              <button 
                onClick={handlePrivacyClick} 
                className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center'
                aria-label="Ver política de privacidad"
              >
                <FontAwesomeIcon icon={faShieldAlt} className='mr-2' />
                Política de Privacidad
              </button>
            </div>
            <div className='text-gray-400 text-sm'>
              © 2024 Eticpro. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>

      {showPrivacyModal && <PrivacyPolicyModal onClose={handleCloseModal} />}
    </footer>
  );
};

export default Footer;
