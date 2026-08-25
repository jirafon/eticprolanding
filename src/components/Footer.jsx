import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LogoImage from '../assets/eticprov5.png';
import LinkedInLogo from '../assets/socia-linkedin@2x.png';
import WS from '../assets/social-whatsapp@2x.png';
import UnbiaxLogo from './unbiax17.png';
import { faTimes, faEnvelope, faPhone, faShieldAlt, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrivacyPolicyModal = ({ onClose }) => {
  const { t } = useTranslation();
  
  return (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'>
    <div className='bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full h-[85vh] relative overflow-y-auto mx-4'>
      <div className='sticky top-0 bg-white pb-4 border-b border-gray-200'>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {t('footer.privacyModal.title')}
      </h2>
          <p className='text-gray-600'>{t('footer.privacyModal.lastUpdate')}</p>
      </div>
      <div className='text-gray-700 leading-relaxed space-y-6 mt-6'>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
            <h3 className='font-semibold text-blue-800 mb-2'>{t('footer.privacyModal.informationCollected.title')}</h3>
          <p>
              {t('footer.privacyModal.informationCollected.content')}
          </p>
        </div>
        
        <div>
            <h3 className='font-semibold text-gray-800 mb-2'>{t('footer.privacyModal.useInformation.title')}</h3>
          <p>
              {t('footer.privacyModal.useInformation.content')}
          </p>
        </div>

        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
            <h3 className='font-semibold text-green-800 mb-2'>{t('footer.privacyModal.security.title')}</h3>
          <p>
              {t('footer.privacyModal.security.content')}
          </p>
        </div>

        <div>
            <h3 className='font-semibold text-gray-800 mb-2'>{t('footer.privacyModal.rights.title')}</h3>
          <p>
              {t('footer.privacyModal.rights.content1')}{' '}
              <a href="mailto:hello@eticpro.com" className='text-blue-600 hover:underline'>hello@eticpro.com</a> {t('footer.privacyModal.rights.content2')}
          </p>
        </div>

        <div className='bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500'>
            <h3 className='font-semibold text-yellow-800 mb-2'>{t('footer.privacyModal.important.title')}</h3>
          <ul className='list-disc list-inside space-y-1'>
              {t('footer.privacyModal.important.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'
          aria-label={t('footer.privacyModal.closeAria')}
      >
        <FontAwesomeIcon icon={faTimes} className='text-2xl' />
      </button>
    </div>
  </div>
);
};

const Footer = () => {
  const { t } = useTranslation();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handlePrivacyClick = () => setShowPrivacyModal(true);
  const handleCloseModal = () => setShowPrivacyModal(false);

  return (
    <footer className='relative overflow-hidden bg-[#081327] text-white mt-24'>
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(49,104,255,0.28),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]"></div>
      <div className='relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <div className='max-w-2xl'>
            <div className='text-xs uppercase tracking-[0.25em] text-blue-200 mb-3'>Eticpro</div>
            <h3 className='text-3xl md:text-4xl font-semibold text-white mb-3'>{t('footer.highlightTitle')}</h3>
            <p className='text-slate-300 leading-relaxed'>{t('footer.highlightDescription')}</p>
          </div>
          <a
            href="mailto:hello@eticpro.com"
            className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-50'
          >
            hello@eticpro.com
          </a>
        </div>
        {/* Main Footer Content */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-2 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8'>
            <div className='flex items-center mb-6'>
              <img src={LogoImage} alt='Eticpro, plataforma de compliance' className='w-48 h-auto' width="192" height="48" />
            </div>
            <p className='text-slate-300 leading-relaxed mb-6 max-w-md'>
              {t('footer.description')}
            </p>
            <div className='flex space-x-4'>
              <a 
                href="https://cl.linkedin.com/company/eticpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/10'
                aria-label="Síguenos en LinkedIn"
              >
                <img src={LinkedInLogo} alt="LinkedIn" className='w-5 h-5' />
              </a>
              <a 
                href="https://wa.me/56987375517" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/10'
                aria-label="Contáctenme por WhatsApp"
              >
                <img src={WS} alt="WhatsApp" className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8'>
            <h3 className='text-xl font-bold mb-6 flex items-center text-white'>
              <FontAwesomeIcon icon={faRocket} className='mr-2 text-blue-400' />
              {t('footer.quickLinks')}
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href="#inicio" className='text-slate-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a href="#FAQ" className='text-slate-300 hover:text-white transition-colors duration-200 flex items-center'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                  {t('footer.faqTitle')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8'>
            <h3 className='text-xl font-bold mb-6 flex items-center text-white'>
              <FontAwesomeIcon icon={faUsers} className='mr-2 text-blue-400' />
              {t('footer.contact')}
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-blue-400 mr-3 w-4' />
                <a 
                  href="mailto:hello@eticpro.com" 
                  className='text-slate-300 hover:text-white transition-colors duration-200'
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
                    className='text-slate-300 hover:text-white transition-colors duration-200 block'
                  >
          +56 9 8737 5517
          </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-white/10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-6'>
              <button 
                onClick={handlePrivacyClick} 
                className='text-slate-300 hover:text-white transition-colors duration-200 flex items-center'
                aria-label={t('footer.privacyModal.viewPrivacy')}
              >
                <FontAwesomeIcon icon={faShieldAlt} className='mr-2' />
                {t('footer.privacyPolicy')}
              </button>
            </div>
            <div className='text-slate-400 text-sm'>
              {t('footer.rights')}
            </div>
          </div>
          {/* Powered by Unbiax */}
          <div className='flex flex-col md:flex-row items-center justify-center mt-6 pt-6 border-t border-white/10 space-y-3 md:space-y-0 md:space-x-4'>
            <span className='text-slate-300 text-base md:text-lg font-medium'>{t('footer.poweredBy')}</span>
            <a 
              href="https://www.unbiax.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center hover:opacity-80 transition-opacity duration-200'
            >
              <img src={UnbiaxLogo} alt="Unbiax" className='h-10 md:h-12 w-auto' />
            </a>
          </div>
        </div>
      </div>

      {showPrivacyModal && <PrivacyPolicyModal onClose={handleCloseModal} />}
    </footer>
  );
};

export default Footer;
