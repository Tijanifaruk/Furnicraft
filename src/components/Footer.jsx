

import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='font-inter bg-footer py-6 px-10 md:py-6 md:px-2 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        
        {/* Contact Info */}
        <div className='text-2xl mt-10 md:mt-0 md:ml-6 '>
          <p className='mb-0.5 '>6455 West Road, Las Vegas</p>
          <p className=''>(555) 555-262</p>
          <div><a href="#" className='text-blue-500 text-sm'>faruktijani02@gmail.com</a></div>
        </div>

        {/* Quick Links */}
        <div className='text-xl'>
          <h3 className='font-bold tracking-wider mb-1 leading-6 text-2xl'>Quick Links</h3>
          <ul>
            <li className='leading-7 my-3'><a href="#">About Us</a></li>
            <li className='leading-7 my-3'><a href="#">Contact Us</a></li>
            <li className='leading-7 my-3'><a href="#">Donation</a></li>
            <li className='leading-7 my-3'><a href="#">Center Location</a></li>
            <li className='leading-7 my-3'><a href="#">Corporate Social</a></li>
            <li className='leading-7 my-3'><a href="#">Responsibility</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='flex mt-5  space-x-3 md:mb-0 mb-16 '>
          <a href="#"><FaSquareXTwitter size={50} /></a>
          <a href="#"><BsFacebook size={50} /></a>
          <a href="#"><FaInstagram size={50} /></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
