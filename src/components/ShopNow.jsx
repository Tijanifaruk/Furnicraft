import React from 'react';
import ShowNowBg from "../assets/ShowNowBg.svg";

function ShopNow() {
  return (
    <div className='relative w-full'>
      <img src={ShowNowBg} alt="ShowNowBg" className='w-full h-full object-cover' />
      
      <div className='absolute top-0 left-0 w-full h-full flex  items-center justify-between  p-10 '>
        <div className='w-1/3'>
          <p className='text-4xl text-white font-semibold'>Limited stock! Grab your dream furniture before it's gone!</p>
        </div>

        <div className='space-x-3 bg-white bg-opacity-10 p-6 mt-6 rounded-lg'>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition">
            <a href="#">🛍️Shop Now</a>
          </button>
          <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
            <a href="#">📞Get in touch</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
