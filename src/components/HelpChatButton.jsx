import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';

const HelpChatButton = ({ agentUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = agentUrl || process.env.REACT_APP_HELP_AGENT_URL || 'https://example.com/your-help-agent';

  const handleLoad = () => {
    // Iframe loaded successfully
    setHasError(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    // Reset error when closing modal to allow retry on next open
    setHasError(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && !hasError) {
      // Set a timeout to detect if the iframe doesn't load
      const loadTimer = setTimeout(() => {
        setHasError(true);
      }, 10000); // 10 seconds timeout

      return () => clearTimeout(loadTimer);
    }
  }, [isOpen, hasError]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Help Button (stacked above WhatsApp) */}
      <div className="fixed bottom-36 left-4 right-4 md:left-auto md:right-6 z-50 md:bottom-36 flex justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Abrir chat de ayuda"
          title="Ayuda"
        >
          <FontAwesomeIcon icon={faCircleQuestion} className="text-xl md:text-2xl" />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white w-[95vw] max-w-[450px] h-[85vh] rounded-2xl shadow-2xl overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-end px-4 py-3 border-b border-gray-200">
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2"
                aria-label="Cerrar"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>
            {/* Iframe content */}
            {!hasError ? (
              <iframe
                src={url}
                title="Asistente de Ayuda"
                className="w-full"
                style={{ height: 'calc(85vh - 60px)' }}
                frameBorder="0"
                allow="microphone; camera; clipboard-read; clipboard-write;"
                onLoad={handleLoad}
              />
            ) : (
              <div className="flex items-center justify-center h-[calc(85vh-60px)] p-8 text-center">
                <div>
                  <FontAwesomeIcon icon={faCircleQuestion} className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Error al cargar el agente</h3>
                  <p className="text-gray-600 mb-4">No se pudo cargar el chat de ayuda en este momento.</p>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HelpChatButton;
