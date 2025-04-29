import React from 'react';
import herobg from "../assets/herobg.svg";
import SofaAnimation from './SofaAnimation';

function Hero() {
  return (
    <>
      <div className='bg-white mt-10'>
        <div className='justify-center mb-10 md:mb-0 w-full relative flex flex-col items-center font-inter mx-auto md:w-2/3'> 
          {/* Hero background image */}
          <img src={herobg} alt="hero-bg" className='w-full' />
          
          {/* Text and Buttons overlay */}
          <div className='absolute inset-y-1/4 flex flex-col items-center h-full'>   
            <h2 className='text-3xl font-bold md:text-5xl text-center'>
              Crafted for Comfort, <br /> Designed for <span className='text-secondary font-playfair italic'>Life</span>
            </h2>

            <p className='text-xs mt-3 font-light md:mt-8 md:text-lg md:tracking-widest text-center'>
              Elevate your home with premium, handcrafted <br /> furniture built for style and durability
            </p>

            <div className="w-screen px-4 flex flex-col mt-6 gap-4 md:flex-row md:justify-center">
  <button className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition">
    🛍️ Shop Now
  </button>
  
  <button className="w-full md:w-auto border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
    📞 Get in touch
  </button>
</div>

          </div>
        </div>
      </div>

      {/* Sofa animation component */}
      <SofaAnimation />
    </>
  )
}

export default Hero;
