import React from 'react';
import Laptop from '../assets/compliancegc.png';
import GG from '../assets/biogg.png';
import CH from '../assets/bioch.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '></p>

            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Nuestros Partners</h1>
            <p>
            </p>
            <div>
              <p>
              <img className='w-[200px] mx-auto my-4' src={Laptop} alt='/' />

              </p>
            </div>
            <div>
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
