import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Check from '../assets/check@2x.png'; // A
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faPhone, faBuilding, faEnvelope, faComment, faCheckCircle, faChevronDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const PrivacyPolicyModal = ({ onClose }) => (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
    <div className='bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full h-[80vh] relative overflow-y-auto'> {/* Modal más ancha y desplazable */}
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

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    comment: '',
  });
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const modalRef = useRef(null);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handlePrivacyModalOpen = () => {
    setShowPrivacyModal(true);
  };

  const handlePrivacyModalClose = () => {
    setShowPrivacyModal(false);
  };

  const handleCheckboxChange = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };




  if (!isOpen && !isSubmitted) return null;

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
 
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, company, email, comment } = formData;
    let emailTemplate = `Hola, llegaron las siguientes respuestas de la encuesta junto con los detalles de contacto:\n\n`;
    emailTemplate += `<p><strong>Nombre:</strong> ${name}</p>`;
    emailTemplate += `<p><strong>Teléfono:</strong> ${phone}</p>`;
    emailTemplate += `<p><strong>Empresa:</strong> ${company}</p>`;
    emailTemplate += `<p><strong>Email:</strong> ${email}</p>`;
    emailTemplate += `<p><strong>Mensaje:</strong> ${comment}</p>`;

    try {
      setIsLoading(true);

      // 1) Guardar prospecto en Mongo FIRST
      const prospectData = {
        companyName: company,
        rut: '',
        industry: 'other',
        size: 'medium',
        website: '',
        address: '',
        contacts: [
          {
            name: name,
            role: 'Contact',
            email: email,
            phone: phone,
            isPrimary: true,
          },
        ],
        stage: 'lead',
        source: 'Eticpro website',
        estimatedValue: null,
        probability: 10,
        expectedCloseDate: null,
        interestedProducts: 'Eticpro1',
        score: 25,
        priority: 'medium',
        nextFollowUp: null,
        status: 'active',
        notes: comment || '',
        tags: [],
        assignedTo: '',
        createdBy: 'landing@eticpro.com',
      };

      let mongoOk = false;
      try {
        const mongoResponse = await fetch('https://scraperut.onrender.com/crm/prospects', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_SCRAPER_TOKEN}`
          },
          body: JSON.stringify(prospectData),
        });
        console.log('MongoDB Response Status:', mongoResponse.status);
        console.log('MongoDB Response Body:', await mongoResponse.text());
        mongoOk = mongoResponse.ok;
      } catch (mongoErr) {
        console.error('Error guardando prospecto:', mongoErr);
      }

      // 2) Enviar email
      let emailOk = false;
      try {
        const emailResp = await fetch('https://vault-server-u5xa.onrender.com/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            emails: ['ncastillo@unbiax.com'],
            emailTemplate,
            subject: 'Solicitud de Demo recibida',
          }),
        });
        console.log('Email Response Status:', emailResp.status);
        emailOk = emailResp.ok;
      } catch (emailErr) {
        console.error('Error enviando email:', emailErr);
      }

      if (mongoOk || emailOk) {
        setFormData({
          name: '',
          phone: '',
          company: '',
          email: '',
          comment: '',
        });
        setIsSubmitted(true);
      } else {
        alert('No se pudo completar la solicitud.');
      }
    } catch (error) {
      console.error(error);
      alert('Falló el envío del formulario.');
    } finally {
      setIsLoading(false);
    }
};


  
  return (
    <>
      {showPrivacyModal && <PrivacyPolicyModal onClose={handlePrivacyModalClose} />}
      <div className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50'>
        {isSubmitted ? (
          <div
            ref={modalRef}
            className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative'
          >
            <div className='flex flex-col items-center'>
              <img src={Check} alt="Check Icon" className='w-12 h-12 mb-4' />
              <h2 className='text-3xl font-bold mb-6 text-center'>¡Enviado!</h2>
              <p className='text-base md:text-lg mb-6 text-center'>
                Ya estás más cerca de cumplir con la Ley y manejar tus procesos de compliance de manera fácil y segura.
                Un representante te contactará en máximo 48h.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className='bg-[rgb(43,71,146)] text-white p-2 rounded-md w-full'
              >
                Ok
              </button>
            </div>
          </div>
        ) : (
          <div
            ref={modalRef}
            className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative'
            >
            <button
              onClick={onClose}
              className='absolute top-2 right-2 text-xl bg-white bg-opacity-80 hover:bg-blue-100 rounded-full p-2 shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
              style={{ color: '#2B4792' }}
              aria-label='Cerrar'
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className='text-3xl font-bold mb-6 text-center'>Contáctenme</h2>
            <p className='text-2xl md:text-lg mb-6 text-center'>
              Llena el siguiente formulario y un representante te contactará a la brevedad.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder='Nombre'
                className='block w-full max-w-xs mt-1 border border-gray-300 rounded-md px-4 py-1 mb-6'
                required
              />
              <input
                type='text'
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder='Teléfono'
                className='block w-full max-w-xs mt-1 border border-gray-300 rounded-md px-4 py-1 mb-6'
                required
              />
              <input
                type='text'
                value={formData.company}
                onChange={handleInputChange('company')}
                placeholder='Empresa'
                className='block w-full max-w-xs mt-1 border border-gray-300 rounded-md px-4 py-1 mb-6'
                required
              />
              <input
                type='email'
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder='Email'
                className='block w-full max-w-xs mt-1 border border-gray-300 rounded-md px-4 py-1 mb-6'
                required
              />
              <textarea
                value={formData.comment}
                onChange={handleInputChange('comment')}
                placeholder='Comentario'
                className='block w-full max-w-xs mt-1 border border-gray-300 rounded-md px-4 py-1 mb-6'
              />
              <div className='flex items-center mb-6'>
                <input
                  type='checkbox'
                  id='privacy-checkbox'
                  checked={isPrivacyChecked}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                  required
                />
                <label htmlFor='privacy-checkbox' className='text-sm'>
                  Acepto la{' '}
                  <button
                    type='button'
                    onClick={handlePrivacyModalOpen}
                    className='text-blue-600 underline bg-white border border-blue-600 p-2 rounded-md'
                  >
                    política de privacidad
                  </button>
                </label>
              </div>
              <button
                type='submit'
                className='bg-[rgb(43,71,146)] text-white p-2 rounded-md w-full'
                disabled={!isPrivacyChecked}
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default DemoModal;
