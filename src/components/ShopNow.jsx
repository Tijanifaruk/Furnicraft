import React from 'react';
import ShowNowBg from "../assets/ShowNowBg.svg";
import ShowNowBg2 from "../assets/ShowNowBg2.jpg";

function ShopNow() {
  return (
    <div className=' relative w-full md:h-[200px] h-[350px] '>
      {/* Background Image */}
      {/* Desktop Image */}
      <img 
        src={ShowNowBg} 
        alt="ShowNowBg" 
        className="hidden md:block w-full h-full object-cover" 
      />

      {/* Mobile Image */}
      <img 
        src={ShowNowBg2} 
        alt="ShowNowBg2" 
        className="block md:hidden w-full h-full object-cover " 
      />
      
      {/* Overlay Content */}
      <div className='absolute top-0 left-0 w-full  flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between p-6 '>
        
        {/* Text Section */}
        <div className=' w-full md:w-3/5   '>
          {/* Desktop Text */}
          <p className='hidden md:block  text-4xl text-[#c4bfc9] font-semibold '>
            Limited stock! Grab your dream furniture before it's gone!
          </p>

          {/* Mobile Text */}
          <div className="flex md:hidden flex-col text-5xl text-white font-semibold text-left leading-tight ml-4 mb-4">
            <span>Ready to</span>
            <span>redefine your</span>
            <span>space?</span>
          </div>
        </div>

        {/* Button Section */}
        <div className='w-full  md:w-auto flex flex-col lg:flex-row items-start md:items-center space-y-4 lg:space-y-0 lg:space-x-3  md:bg-white md:bg-opacity-10 p-6 rounded-lg  '>
          <button className="bg-primary text-white w-full md:w-auto px-8 py-2 rounded-lg hover:bg-primary/80 transition">
            <a href="#">🛍️ Shop Now</a>
          </button>
          <button className="border border-primary text-primary w-full md:w-auto px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
            <a href="#">📞Get in Touch</a>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ShopNow;
