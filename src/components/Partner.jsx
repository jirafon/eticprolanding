import React from 'react';
import Laptop from '../assets/compliancegc.png';
import Partner1 from '../assets/partner1.png';
import Unbiax from '../assets/unbiax.avif';

const About = () => {
  const laptopLink = "https://compliancegc.com/";
  const unbiaxLink = "https://unbiax.com/";

  return (
    <div id="about" className="about">
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto flex flex-wrap items-center'>
          {/* Left Column */}
          <div className='w-full md:w-1/2 px-4 text-center'>
            <img className='w-[200px] mx-auto mb-4' src={Partner1} alt='Partner1' />
            <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Nuestros Partners</h6>
          </div>
          
          {/* Right Column */}
          <div className='w-full md:w-1/2 px-4'>
            <div className='flex flex-wrap justify-center md:justify-end'>
              <a href={laptopLink} target="_blank" rel="noopener noreferrer">
                <img className='w-[300px] mx-2 my-4' src={Laptop} alt='Laptop' />
              </a>
              <a href={unbiaxLink} target="_blank" rel="noopener noreferrer">
                <img className='w-[300px] mx-2 my-4' src={Unbiax} alt='Unbiax' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
