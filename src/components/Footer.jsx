import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
  return (
    
      <footer className='font-inter bg-footer py-8 px-14 mt-4 text-white'>
        <div className='flex justify-between'>
        {/* contact info */}
        <div className='text-base mt-10'>
        <p className='mb-0.5'>6455 West Road, Las Vegas</p>
        <p className='mb-0.5'>(555) 555-262</p>
        <div><a href="#" className='text-blue-500'>Vitalitywell@gmail.com</a></div>
        
        </div>

   {/* Quick Links */}
        <div>
          <h3 className='font-bold tracking-wider mb-1 leading-6 text-lg'>Quick Links</h3>
          <ul>
            <li className=' leading-7'><a href="#" >About Us</a></li>
            <li  className='leading-7'><a href="#">Contact Us</a></li>
            <li  className='leading-7'><a href="#">Donation</a></li>
            <li  className='leading-7'><a href="#">Center Location</a></li>
            <li  className='leading-7'><a href="#">Corporate Social</a></li>
            <li  className='leading-7'><a href="#">Responsibility</a></li>
          </ul>
        </div>

     {/* Social Icons */}
        <div className='flex mt-16 space-x-3'>
          <a href="#">
          <FaSquareXTwitter size={32}/>
            </a>

          <a href="#">
          <BsFacebook size={32}/>
          </a>

          <a href="#">
          <FaInstagram size={32}/>

          </a>
        </div>
        </div>
      </footer>
    
  )
}

export default Footer
