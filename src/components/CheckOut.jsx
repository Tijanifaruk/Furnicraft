import React from 'react'
import royalseeat from '../assets/royalseeat.svg'




function CheckOut() {
  return (
    <div className='font-inter'>
      <div className='py-4 md:py-6 text-center text-tertiary '>
        <h1 className='font-bold text-xl md:text-3xl'>Check Out February Best Seller</h1>
      </div>


      <div className="flex flex-col md:flex-row md:space-x-16 pb-8 bg-purple container mx-auto">

<div className="w-full md:w-1/2 px-6 md:pl-20">
<img src={royalseeat} alt="Royal Seat" className="hidden md:block md:w-full md:h-auto" />
</div>

<div className="ml-7 w-5/6 md:w-1/3 bg-white/50 p-6 mt-6 md:mt-32 md:mr-20 rounded-xl">
  <div className="justify-center md:mb-6 flex md:justify-between items-center">
    <div>
      <span className="text-special text-4xl font-bold">ROYAL</span>{" "}
      <span className="text-tertiary text-4xl font-bold">SEATS</span>
    </div>
    <div className="bg-white p-1 rounded-lg">
      <span>4.5 ⭐</span>
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
