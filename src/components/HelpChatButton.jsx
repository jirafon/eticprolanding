import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';

const HelpChatButton = ({ agentUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const baseUrl = process.env.REACT_APP_HELP_AGENT_URL || '';
  const defaultUrl = baseUrl 
    ? `${baseUrl}/enhanced-chat-agent/6908c5934065992a7f3973e6?token=3fcbf36aaa75456cc928c90b69a83a98ff28b674c379b0a5927bbd610d9204d61e36824c4e192a88cf8d2b31fe3b30c25c3df1e5ecf9203394f7ac46d12b4c89`
    : 'https://example.com/your-help-agent';
  const url = agentUrl || defaultUrl;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

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
            <iframe
              src={url}
              title="Asistente de Ayuda"
              className="w-full"
              style={{ height: 'calc(85vh - 60px)' }}
              frameBorder="0"
              allow="microphone; camera; clipboard-read; clipboard-write;"
            />
            
          </div>
        </div>
      )}
    </>
  );
};

export default HelpChatButton;
