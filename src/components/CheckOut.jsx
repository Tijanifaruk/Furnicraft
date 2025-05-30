import React from 'react'
import royalseeat from '../assets/royalseeat.svg'




function CheckOut() {
  return (
    <div className='font-inter'>
      <div className='py-4 md:py-6 text-center text-tertiary '>
        <h1 className='font-bold text-xl md:text-3xl'>Check Out February Best Seller</h1>
      </div>


      <div className="w-11/12  flex flex-col md:flex-row  bg-purple  mx-auto items-center p-2">

<div className=" w-full md:w-1/2 ">
<img src={royalseeat} alt="Royal Seat" className="hidden md:block w-full " />
</div>

<div className=" ml-7 w-5/6 md:w-1/2 lg:w-1/3 bg-white/50 rounded-xl p-2">
  <div className="   flex space-x-2 items-center md:py-2">
    <div className=' '>
      <span className="text-special text-3xl font-bold ">ROYAL</span>{" "}
      <span className="text-tertiary text-3xl font-bold">SEATS</span>
    </div>
    <div className="bg-white p-1 rounded-lg">
      <span>4.5⭐</span>
    </div>
    </div>

  <div className="w-full md:w-1/2 px-2 md:hidden">
<img src={royalseeat} alt="Royal Seat" className="w-full h-auto" />
</div>

  <p className="mt-2 mb-3 text-base md:text-xl font-bold">Details:</p>
  <p className="mb-6 text-sm md:text-base">
    Lorem ipsum dolor sit amet consectetur. Netus nibh porttitor lacus rhoncus arcu cras. In tortor sed maecenas mattis sem fames risus. Tincidunt magna ante dignissim pellentesque enim commodo purus urna. Ullamcorper tristique cursus in amet ornare sagittis. Sapien quisque aenean tempor et odio. Odio nec eget et vitae vel donec lorem. Pretium eget amet aenean et viverra iaculis fringilla. Quam ultrices.
  </p>

  <button className="block bg-tertiary w-full py-3 md:py-2 text-white font-bold rounded-xl">
    See More
  </button>
</div>

</div>


    </div>
  )
}

export default CheckOut