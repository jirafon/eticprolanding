import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';

const QRCode = ({ size = 200, className = '' }) => {
  const { t } = useTranslation();
  
  // Obtener la URL actual y agregar el parámetro para abrir el formulario
  const getContactUrl = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?contact=true`;
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeSVG 
          value={getContactUrl()} 
          size={size}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center max-w-xs">
        {t('qrCode.description', 'Escanea para acceder al formulario de contacto')}
      </p>
    </div>
  );
};

export default QRCode;

