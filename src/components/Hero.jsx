import React from 'react'
import herobg from "../assets/herobg.svg"
import SofaAnimation from './SofaAnimation'




function Hero() {
  return (
     <>
        <div className='relative flex flex-col items-center w-2/3 font-inter mx-auto border border-red-900 '>
      <img src={herobg} alt="hero-bg" className='w-full'/>
      <div className='absolute inset-y-1/4	'>   
      <h2 className='font-bold	text-5xl'>Crafted for Comfort, <br/> Designed for <span className='text-secondary  font-playfair italic'>Life</span></h2>
      <p className='mt-8 tracking-widest text-lg font-light'>Elevate your home with premium, handcrafted <br /> furniture built for style and durability</p>

      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"><a href="#">🛍️Shop Now</a></button>

        <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"><a href="#">📞Get in touch</a></button>
      </div>
      </div>
      


    </div>
    {/* import component here */}
    <SofaAnimation />
    </>
     
    
  )
}

export default Hero
