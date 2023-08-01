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
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, puede cancelar su suscripción en cualquier momento. No hay contratos a largo plazo ni tarifas de cancelación. Simplemente vaya a la configuración de su cuenta y seleccione la opción de cancelación.'
    },
    {
      question: '¿Ofrecen descuentos para planes anuales?',
      answer: 'Sí, ofrecemos descuentos significativos para los clientes que eligen planes de facturación anual. Al suscribirse anualmente, puede ahorrar hasta un X% en comparación con los planes de facturación mensual.'
    },
    {
      question: '¿Cómo puedo obtener soporte técnico?',
      answer: 'Ofrecemos soporte técnico las 24 horas del día, los 7 días de la semana, a través de chat en vivo, correo electrónico y teléfono. Nuestro equipo de soporte está listo para ayudarlo con cualquier problema o consulta que pueda tener.'
    }
  ];



  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={LogoImage} alt='Eticpro' className='w-40 h-25' />
        <p className='py-4'>Nos dedicamos a proporcionar soluciones de cumplimiento de vanguardia para empresas de todos los tamaños. Nuestro equipo de expertos en cumplimiento ha desarrollado una plataforma intuitiva y segura para ayudarte a abordar los desafíos regulatorios actuales. Nuestra misión es brindarte las herramientas necesarias para mantener el cumplimiento normativo sin complicaciones y minimizar los riesgos asociados.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          {/* Add any content you want here */}
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        {/*   <h6 className='font-medium text-gray-400'>Soluciones</h6>
          <ul>
            <li className='py-2 text-sm' >Análisis</li>
            
            <li className='py-2 text-sm'>E-learning</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Soporte</h6>
          <ul>
            <li className='py-2 text-sm'>Guías</li>
          </ul>
        </div>
        <div>  */}

          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
          <li className='py-2 text-sm' onClick={handleRespoClick}>Privacidad de Datos</li>
          <li className='py-2 text-sm' onClick={handleLegalClick}>Términos y Condiciones</li>
        </ul>
        </div>
         <div>
       <h6 className='font-medium text-gray-400'>Empresa</h6>
        <ul>
         <li className='py-2 text-sm' onClick={handleFAQClick}>FAQ</li> 
        </ul>
        </div>
      </div>

  
    {/* Términos Modal */}
{showTermsModal && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Términos y Condiciones</h3>
      {/* Include the content for Términos Modal in Spanish here */}
      {/* Make sure to replace the content below with your actual Terms and Conditions */}
      <p className="text-gray-700 leading-7">
        Bienvenido(a) a Eticpro. Antes de utilizar nuestros servicios o acceder a nuestro sitio web, le solicitamos que lea detenidamente los siguientes Términos y Condiciones. Al utilizar nuestros servicios, usted acepta estar sujeto a estos términos y cumplir con todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestros servicios.

        Uso Aceptable:
        1.1 Usted acepta utilizar nuestros servicios únicamente con fines legales y de acuerdo con estos Términos y Condiciones. Se prohíbe cualquier uso no autorizado, fraudulento o ilícito de nuestros servicios.
        1.2 Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y de todas las actividades que ocurran en su cuenta. Si sospecha que su cuenta ha sido comprometida, debe notificarlo de inmediato a nuestro equipo de soporte.

        Propiedad Intelectual:
        2.1 Todo el contenido presente en nuestro sitio web, incluidos pero no limitados a textos, gráficos, logotipos, imágenes, videos, audios y software, son propiedad exclusiva de Eticpro de terceros con los que tengamos acuerdos de licencia. Está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual.
        2.2 Usted no está autorizado a copiar, modificar, distribuir, transmitir, exhibir, realizar, reproducir, publicar, otorgar licencias, crear trabajos derivados, transferir o vender cualquier contenido, a menos que cuente con la autorización previa y por escrito de [nombre de la empresa] o de los propietarios de los derechos de autor correspondientes.

        Privacidad:
        3.1 Nuestra Política de Privacidad detalla cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona durante el uso de nuestros servicios. Al aceptar estos Términos y Condiciones, también acepta nuestra Política de Privacidad.

        Responsabilidad Legal:
        4.1 Eticpro no se hace responsable de ningún daño directo, indirecto, incidental, consecuente o especial que surja del uso o la imposibilidad de utilizar nuestros servicios, incluso si se nos ha notificado sobre la posibilidad de tales daños.
        4.2 Usted acepta indemnizar y eximir de responsabilidad a [nombre de la empresa], sus empleados, directores, socios y representantes legales de cualquier reclamo, demanda o acción legal, incluidos los honorarios legales razonables, que surjan del incumplimiento de estos Términos y Condiciones.

        Modificaciones:
        5.1 Nos reservamos el derecho de modificar, actualizar o reemplazar estos Términos y Condiciones en cualquier momento y sin previo aviso. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web. Le recomendamos que revise periódicamente esta página para estar informado sobre las actualizaciones.

        Ley aplicable:
        6.1 Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del país o estado donde se contrató nuestra empresa sin tener en cuenta sus conflictos de principios legales.
        Al utilizar nuestros servicios, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad. Si tiene alguna pregunta o inquietud, no dude en ponerse en contacto con nuestro equipo de soporte.
        Fecha de entrada en vigencia: 8 de Agosto 2023.

        Atentamente,

        El equipo de Eticpro.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseModal}>Cerrar</button>
    </div>
  </div>
)}

{/* Privacidad de Datos Modal */}
{showPrivacyModal && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Responsabilidad legal en el uso de información privada</h3>

      <p className="text-gray-700 leading-7">
        Bienvenido a nuestro sitio web de cumplimiento. Aquí en Eticpro, nos tomamos muy en serio la protección de la privacidad de nuestros usuarios y clientes. Reconocemos la importancia de mantener la confidencialidad de la información privada y estamos comprometidos a cumplir con todas las leyes y regulaciones aplicables relacionadas con la privacidad y protección de datos.

        La "Responsabilidad legal en el uso de información privada" es un tema crucial en la era digital en la que vivimos. Como empresa responsable, nos aseguramos de recopilar y utilizar la información privada de manera adecuada, siempre respetando los derechos y la privacidad de nuestros usuarios.

        Nuestra política de privacidad detalla cómo recopilamos, almacenamos, procesamos y utilizamos la información personal de nuestros usuarios. Además, garantizamos que esta información solo será utilizada con el propósito para el cual fue proporcionada y que no será compartida con terceros sin el consentimiento expreso del titular de los datos, a menos que estemos legalmente obligados a hacerlo.

        Nos comprometemos a implementar medidas de seguridad para proteger la información privada contra el acceso no autorizado, la pérdida, el uso indebido o la divulgación. Nuestros empleados están capacitados para manejar la información privada de manera adecuada y están sujetos a estrictas obligaciones de confidencialidad.

        Siempre actuamos en conformidad con las leyes y regulaciones aplicables en materia de protección de datos y privacidad, y nos esforzamos por mantenernos actualizados con los cambios legislativos relevantes.

        En caso de que se produzca una violación de datos o cualquier incidente de seguridad que afecte la información privada, tomaremos las medidas necesarias para remediar la situación y notificaremos a las autoridades y a las partes afectadas según lo exija la ley.

        Entendemos que la confianza de nuestros usuarios y clientes es fundamental para el éxito de nuestra empresa, por lo que trabajamos constantemente para mantener altos estándares de protección de la privacidad y para asegurarnos de que nuestra responsabilidad legal en el uso de información privada sea siempre respetada.

        Gracias por confiar en [nombre de la empresa]. Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o la forma en que manejamos la información privada, no dude en ponerse en contacto con nuestro equipo de cumplimiento.

        Atentamente,

        El equipo de Eticpro
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseModal}>Cerrar</button>
    </div>
  </div>
)}

    {/* FAQ Modal */}
  {showFAQModal && (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-bold text-gray-700 mb-4">FAQ</h3>
        <div className="text-gray-700">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-md font-bold mb-2">{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseModal}>Cerrar</button>
      </div>
    </div>
  )}
</div>
);
};

export default Footer;

    