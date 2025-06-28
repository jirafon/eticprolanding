import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBuilding, faIndustry, faComments, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
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

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: ''
        });
      }, 3000);
    }, 2000);
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
      placeholder: 'Nombre de tu empresa (opcional)',
      type: 'text',
      required: false
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faCheck} className="text-3xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Mensaje Enviado!</h2>
          <p className="text-gray-600 mb-6">
            Gracias por contactarnos. Un representante de nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-blue-700">
              <strong>¿Necesitas ayuda inmediata?</strong><br />
              Escríbenos a hello@eticpro.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Contacto Directo
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Listo para <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">transformar</span> tu compliance?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y nuestro equipo de expertos te contactará en menos de 24 horas
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              {inputFields.map(({ field, icon, placeholder, type, required }) => (
                <div key={field} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FontAwesomeIcon 
                      icon={icon} 
                      className={`text-lg ${errors[field] ? 'text-red-500' : 'text-blue-500'}`} 
                    />
                  </div>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[field]}
                    onChange={handleInputChange(field)}
                    required={required}
                    className={`
                      w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-700 placeholder-gray-400
                      focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300
                      ${errors[field] 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                      }
                      ${formData[field] && !errors[field] ? 'border-green-300 bg-green-50' : ''}
                    `}
                  />
                  {errors[field] && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute top-4 left-4 flex items-center pointer-events-none">
                <FontAwesomeIcon 
                  icon={faComments} 
                  className={`text-lg ${errors.message ? 'text-red-500' : 'text-blue-500'}`} 
                />
              </div>
              <textarea
                placeholder="Cuéntanos sobre tu proyecto de compliance..."
                value={formData.message}
                onChange={handleInputChange('message')}
                required
                rows={4}
                className={`
                  w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none
                  ${errors.message 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                  }
                  ${formData.message && !errors.message ? 'border-green-300 bg-green-50' : ''}
                `}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold
                rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed
                disabled:transform-none disabled:shadow-lg
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
                  Enviando mensaje...
                </div>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Respuesta Rápida</h3>
                <p className="text-sm text-gray-600">En menos de 24 horas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Consulta Gratuita</h3>
                <p className="text-sm text-gray-600">Primera evaluación sin costo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={faUser} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Expertos Certificados</h3>
                <p className="text-sm text-gray-600">Equipo especializado en compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
