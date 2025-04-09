import React from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io";


function NewCollections() {
  return (
    <div>
      <div className='bg-white py-6 text-center text-tertiary '>
        <h1 className='font-bold text-3xl'>New Collections</h1>
      </div>
      


     {/* Collection  */}
      <div className='flex justify-around bg-lightestpurple'>




        {/* left */}
     <div className='flex flex-col w-2/5  py-8'>

    <div className='bg-lightPurple flex justify-between items-center mb-2 px-16 py-2 rounded-lg text-xl font-semibold text-tertiary'>
      <p className=''>Arm Chair</p>
      <IoMdArrowDropdownCircle className=''/>
    </div>
    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Center Table</p>
      <IoMdArrowDropdownCircle />
    </div>
    
    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Accent Chair</p>
      <IoMdArrowDropdownCircle />
    </div>
    

    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold  text-tertiary'>
      <p>Lamp</p>
      <IoMdArrowDropdownCircle />
    </div>

    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Sofa</p>
      <IoMdArrowDropdownCircle />
    </div>
      
     </div>


    {/* right */}
<div className='flex flex-col w-2/5  py-8'>
    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Lamp</p>
      <IoMdArrowDropdownCircle />
    </div>
    
    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2  px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Wing Chair</p>
      <IoMdArrowDropdownCircle />
    </div>

    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Flore Lamps</p>
      <IoMdArrowDropdownCircle />
    </div>

    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Square Table</p>
      <IoMdArrowDropdownCircle />
    </div>

    <div className='bg-lightPurple flex justify-between items-center mb-2 py-2 px-16 rounded-lg text-xl font-semibold text-tertiary'>
      <p>Modern Seaters</p>
      <IoMdArrowDropdownCircle />
    </div>


    </div>


    
      </div>
      </div>
  )
}

export default NewCollections
