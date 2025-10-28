import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBuilding, faIndustry, faComments, faCheck, faSpinner, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = ({ isFullPage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFocus = (field) => () => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const validateForm = () => {
    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa es requerido';
    }
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const { name, email, phone, company, industry, message } = formData;
    let emailTemplate = `Hola, llegó una nueva solicitud de contacto desde el formulario de Eticpro:\n\n`;
    emailTemplate += `<p><strong>Nombre:</strong> ${name}</p>`;
    emailTemplate += `<p><strong>Email:</strong> ${email}</p>`;
    emailTemplate += `<p><strong>Teléfono:</strong> ${phone}</p>`;
    emailTemplate += `<p><strong>Empresa:</strong> ${company || 'No especificada'}</p>`;
    emailTemplate += `<p><strong>Industria:</strong> ${industry || 'No especificada'}</p>`;
    emailTemplate += `<p><strong>Mensaje:</strong> ${message}</p>`;

    try {
      const response = await fetch('https://vault-server-u5xa.onrender.com/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: ['ncastillo@unbiax.com'],
          emailTemplate,
          subject: 'Nueva Solicitud de Contacto - Eticpro',
        }),
      });

      // Guardar en MongoDB
      const prospectData = {
        companyName: company,
        rut: '',
        industry: industry || 'other',
        size: 'medium',
        website: '',
        address: '',
        contacts: [
          {
            name: name,
            role: 'Contact',
            email: email,
            phone: phone,
            isPrimary: true
          }
        ],
        stage: 'lead',
        source: 'Eticpro website',
        estimatedValue: null,
        probability: 10,
        expectedCloseDate: null,
        interestedProducts: 'Eticpro',
        score: 25,
        priority: 'medium',
        nextFollowUp: null,
        status: 'active',
        notes: message || '',
        tags: [],
        assignedTo: '',
        createdBy: 'landing@eticpro.com'
      };

      await fetch('https://scraperut.onrender.com/crm/prospects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SCRAPER_TOKEN}`
        },
        body: JSON.stringify(prospectData),
      });

      if (response.ok) {
      setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: ''
        });
      } else {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      field: 'name',
      icon: faUser,
      placeholder: 'Tu nombre completo',
      type: 'text',
      required: true
    },
    {
      field: 'email',
      icon: faEnvelope,
      placeholder: 'tu@email.com',
      type: 'email',
      required: true
    },
    {
      field: 'phone',
      icon: faPhone,
      placeholder: '+56 9 1234 5678',
      type: 'tel',
      required: true
    },
    {
      field: 'company',
      icon: faBuilding,
  placeholder: 'Nombre de tu empresa',
      type: 'text',
  required: true
    },
    {
      field: 'industry',
      icon: faIndustry,
      placeholder: 'Tu industria (opcional)',
      type: 'text',
      required: false
    }
  ];

  if (isSubmitted) {
    return (
      <div className={`${isFullPage ? 'min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4' : 'w-full'}`}>
        <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 text-center border border-white/20">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
            <FontAwesomeIcon icon={faCheck} className="text-2xl sm:text-3xl text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            ¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente. Un representante de nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 border border-blue-100/50">
            <p className="text-xs sm:text-sm text-blue-700 font-medium">
              <strong>¿Necesitas ayuda inmediata?</strong><br />
              Escríbenos a hello@eticpro.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isFullPage ? 'min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-8' : 'w-full'}`}>
      <div className={`${isFullPage ? 'max-w-2xl w-full' : 'w-full'}`}>
        {/* Header - Siempre mostrar el título */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200/50">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Contacto Directo
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">transformar</span> tu compliance?
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Completa el formulario y nuestro equipo de expertos te contactará en breve
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 w-full">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {inputFields.map(({ field, icon, placeholder, type, required }) => (
                <div key={field} className="relative group">
                  <div className={`absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none transition-all duration-300 ${
                    focusedField === field ? 'text-blue-600 scale-110' : 
                    errors[field] ? 'text-red-500' : 'text-blue-500'
                  }`}>
                    <FontAwesomeIcon icon={icon} className="text-sm sm:text-lg" />
                  </div>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[field]}
                    onChange={handleInputChange(field)}
                    onFocus={handleFocus(field)}
                    onBlur={handleBlur}
                    required={required}
                    className={`
                      w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-400 text-sm sm:text-base
                      focus:outline-none focus:ring-4 transition-all duration-300 transform
                      ${focusedField === field ? 'scale-105 shadow-lg' : ''}
                      ${errors[field] 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/50' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-blue-300'
                      }
                      ${formData[field] && !errors[field] ? 'border-green-300 bg-green-50/50 shadow-green-100' : ''}
                      backdrop-blur-sm
                    `}
                  />
                  {errors[field] && (
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">
                      {errors[field]}
                    </p>
                  )}
                  {formData[field] && !errors[field] && (
                    <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Field */}
            <div className="relative group">
              <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center pointer-events-none transition-all duration-300 ${
                focusedField === 'message' ? 'text-blue-600 scale-110' : 
                errors.message ? 'text-red-500' : 'text-blue-500'
              }`}>
                <FontAwesomeIcon icon={faComments} className="text-sm sm:text-lg" />
              </div>
              <textarea
                placeholder="Cuéntanos sobre tu proyecto de compliance..."
                value={formData.message}
                onChange={handleInputChange('message')}
                onFocus={handleFocus('message')}
                onBlur={handleBlur}
                required
                rows={4}
                className={`
                  w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 rounded-xl sm:rounded-2xl text-gray-700 placeholder-gray-400 text-sm sm:text-base
                  focus:outline-none focus:ring-4 transition-all duration-300 resize-none transform
                  ${focusedField === 'message' ? 'scale-105 shadow-lg' : ''}
                  ${errors.message 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/50' 
                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100 hover:border-blue-300'
                  }
                  ${formData.message && !errors.message ? 'border-green-300 bg-green-50/50 shadow-green-100' : ''}
                  backdrop-blur-sm
                `}
              />
              {errors.message && (
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">
                  {errors.message}
                </p>
              )}
              {formData.message && !errors.message && (
                <div className="absolute right-2 sm:right-3 top-3 sm:top-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-3 sm:py-4 md:py-5 px-6 sm:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold text-sm sm:text-base
                rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed
                disabled:transform-none disabled:shadow-xl relative overflow-hidden group
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {isSubmitting ? (
                <div className="flex items-center justify-center relative z-10">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-sm">Enviando mensaje...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center relative z-10">
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm">Enviar Mensaje</span>
                </div>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-lg sm:text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-lg">Respuesta Rápida</h3>
                <p className="text-xs sm:text-sm text-gray-600">En menos de 24 horas</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faCheck} className="text-white text-lg sm:text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-lg">Consulta Gratuita</h3>
                <p className="text-xs sm:text-sm text-gray-600">Primera evaluación sin costo</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faUser} className="text-white text-lg sm:text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-lg">Expertos Certificados</h3>
                <p className="text-xs sm:text-sm text-gray-600">Equipo especializado en compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
