import React from 'react'
import EasyShops from '../assets/EasyShops.svg'
import MetroFasts from '../assets/MetroFasts.svg'
import SwiftDelivers from '../assets/SwiftDelivers.svg'



function Services() {
  return (
    <div className='flex justify-around items-center py-4 px-40 font-inter bg-lightestpurple'>
      
      <div className='flex justify-center items-center '>
        <img src={MetroFasts} alt="" />
        <p className='ml-4 font-medium text-foundationblack'> Swift & Free Delivery</p>
      </div>

      <div className='flex justify-center items-center '>
        <img src={EasyShops} alt="Easytoshop" />
        <p className='ml-4 font-medium text-foundationblack'>Easy to Shop</p>
      </div>

      <div className='flex justify-center items-center '>
        <img src={SwiftDelivers} alt="" />
        <p className='ml-4 font-medium text-foundationblack'>Stress-Free Returns</p>
      </div>

    </div>
  )
}

export default Services
