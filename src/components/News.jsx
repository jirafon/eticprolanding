import React, { useState } from 'react';
import Control from '../assets/cont6.png';
import ImageBottomLeft from '../assets/fondo-cta-izq.svg'; // Ensure this image exists
import ImageBottomRight from '../assets/fondo-cta-der@2x.png'; // Ensure this image exists
import DemoModal from './Demo'; // Import the modal component
import Quiz from './Quiz'; // Import the modal component

const Analytics = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isModalOpenQuiz, setIsModalOpenQuiz] = useState(false); // State to manage modal visibility

  const handleNav = () => {
    setNav(!nav);
  };

    const handleLogin = () => {
        window.location.replace('https://compliax.onrender.com');
    };

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };
  
    
      const handleOpenModal = () => {
        setIsModalOpen(true); // Open the modal
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
      };
    
      const handleOpenModalQuiz = () => {
        setIsModalOpenQuiz(true); // Open the modal
      };
    
      const handleCloseModalQuiz = () => {
        setIsModalOpenQuiz(false); // Close the modal
      };
    return (
        <section id="news" className="relative" style={{ backgroundColor: 'rgb(236, 253, 255)' }}>
            <div className='w-full max-w-6xl mx-auto relative z-10 px-[10%] py-24'>
                <div className='flex flex-col justify-center items-center text-center relative bg-blue-900 text-white p-12 z-30'>
                    <button 
                        className="nav-button nav-button-demo mb-4"
                        onClick={handleOpenModal}
                        style={{ backgroundColor: 'white', color: 'black' }}
                    >
                        Contactenme
                    </button>
                
                    <h1
                        className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 cursor-pointer text-white'
                        onClick={toggleContentVisibility}
                        aria-expanded={isContentVisible}
                    >
                        Asegura una cultura de integridad y transparencia con EticPro.
                    </h1>
                    <h2 className='text-lg font-semibold mb-2 text-white'>
                        Solicita una demostración ahora y descubre la vanguardia del cumplimiento ético.
                    </h2>
                    {isContentVisible && (
                        <div className="text-white text-6xl font-serif" style={{ fontSize: '180%' }}>
                            {/* Optional dynamic content */}
                        </div>
                    )}
                    <img 
                        src={ImageBottomLeft} 
                        alt="Bottom Left" 
                        className="absolute bottom-0 left-0 w-32 h-37 object-cover z-30"  // Adjusted size for left logo
                    />
                    <img 
                        src={ImageBottomRight} 
                        alt="Bottom Right" 
                        className="absolute bottom-0 right-0 w-32 h-32 object-cover z-30" 
                    />
                </div>
            </div>
            <DemoModal isOpen={isModalOpen} onClose={handleCloseModal} />

        </section>
    );
};

export default Analytics;
