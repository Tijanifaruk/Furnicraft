import React from 'react'
import royalseeat from '../assets/royalseeat.svg'




function CheckOut() {
  return (
    <div className='font-inter'>
      <div className='bg-white py-6 text-center text-tertiary '>
        <h1 className='font-bold text-3xl'>Check Out February Best Seller</h1>
      </div>


    <div className='flex pb-8 bg-purple'>

    <div className='w-1/2 pl-20'>
     <img src={royalseeat} alt="Royal Seat"  />
    </div>


    <div className='w-1/3  bg-white/50 pr-6  pl-6  pt-6  mt-32 mr-20 h-96  rounded-xl '>
      <h2 className='mb-10 flex justify-between items-center mr-16'>
        <span className='text-special text-4xl font-bold'>ROYAL</span>{" "}
        <span className='text-tertiary text-4xl font-bold'>SEATS</span>{" "}
       <div className='bg-white p-1 rounded-lg'><span>4.5 ⭐</span></div>
        
      </h2>

      <p className='mb-3 text-xl text-Details'>Details:</p>
      <p className='mb-6'>
     Lorem ipsum dolor sit amet consectetur. Netus nibh porttitor lacus rhoncus arcu cras. In tortor sed maecenas  mattis  sem fames risus. Tincidunt magna ante dignissim pellentesque enim commodo purus urna. Ullamcorper     tristique cursus  in amet ornare sagittis. Sapien quisque aenean tempor et odio. Odio nec eget et vitae vel donec lorem. Pretium eget  amet aenean et viverra iaculis fringilla. Quam ultrices.
      </p>

      <button className='block bg-tertiary w-full py-2 text-white font-bold rounded-xl '>See More</button>
    </div>

    </div>









    </div>
  )
}

export default CheckOut
