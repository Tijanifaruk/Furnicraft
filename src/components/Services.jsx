import React from 'react'
import EasyShops from '../assets/EasyShops.svg'
import MetroFasts from '../assets/MetroFasts.svg'
import SwiftDelivers from '../assets/SwiftDelivers.svg'



function Services() {
  return (
    <div className='flex md:justify-around justify-between  items-center py-3 font-inter mx-auto bg-lightestpurple text-xs md:text-base md:gap-4'>
      
      <div className='flex  items-center px-2'>
        <img src={MetroFasts} alt="" />
        <p className='md:ml-4 font-medium text-foundationblack whitespace-nowrap md:whitespace-normal '> Swift & Free Delivery</p>
      </div>

      <div className='flex  items-center px-2'>
        <img src={EasyShops} alt="Easytoshop" />
        <p className='md:ml-4 font-medium text-foundationblack whitespace-nowrap md:whitespace-normal'>Easy to Shop</p>
      </div>

      <div className='flex  items-center px-2 mr-2'>
        <img src={SwiftDelivers} alt="" />
        <p className='md:ml-4 font-medium text-foundationblack whitespace-nowrap md:whitespace-normal'>Stress-Free Returns</p>
      </div>

    </div>
  )
}

export default Services
