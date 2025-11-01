import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);

  const phoneNumber = '56987375517'; // Número de WhatsApp de Eticpro
  const message = 'Hola, me interesa conocer más sobre Eticpro y sus soluciones de compliance. ¿Podrían ayudarme?';

  // Mostrar el botón después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar indicador de WhatsApp después de 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBubble(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowChatBubble(false); // Ocultar burbuja después del clic
  };


  if (!isVisible) return null;

  return (
    <>
      {/* Indicador de comunicación WhatsApp */}
      {showChatBubble && (
        <div className="fixed bottom-20 right-6 z-40 md:bottom-20 md:right-6">
          <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm font-medium animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span>¡Chatea con nosotros!</span>
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />
          </div>
        </div>
      )}

      {/* Botón flotante de WhatsApp */}
      <div
        className="fixed bottom-6 right-6 z-50 md:bottom-6 md:right-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap text-sm opacity-100 transition-opacity duration-300">
            <div className="flex items-center">
              <span className="mr-2">💬</span>
              ¿Necesitas ayuda? ¡Chatea con nosotros!
            </div>
            {/* Flecha del tooltip */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        )}

        {/* Botón principal */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`
            w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg
            flex items-center justify-center transition-all duration-300 transform
            ${isHovered ? 'scale-110 shadow-xl' : 'scale-100'}
            hover:rotate-12
            focus:outline-none focus:ring-4 focus:ring-green-300
            group
            opacity-100
          `}
          aria-label="Contactar por WhatsApp"
          style={{
            animation: 'fadeInUp 0.6s ease-out'
          }}
        >
          <FontAwesomeIcon 
            icon={faWhatsapp} 
            className="text-2xl group-hover:scale-110 transition-transform duration-200" 
          />
        </button>

        {/* Efecto de pulso */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30 scale-150"></div>
      </div>


      {/* Estilos CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `
      }} />
    </>
  );
};

export default WhatsAppButton; 