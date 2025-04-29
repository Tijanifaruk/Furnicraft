
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import '../App.css';
import MacbookAir5 from  "../assets/MacbookAir5.png"
import MacbookAir6 from "../assets/MacbookAir6.png"
import MacbookAir7 from "../assets/MacbookAir7.png"



// import required modules
import { Autoplay} from 'swiper/modules'; // Pagination, Navigation 

export default function SofaAnimation() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // // navigation={true}
        modules={[Autoplay]}
        className="mySwi per"
      >
        <SwiperSlide>
          <img src={MacbookAir5} 
          alt="Sofa" className=''/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={MacbookAir6} alt="Sofa" className='' /> 
        </SwiperSlide>   

        <SwiperSlide>
          <img src={MacbookAir7} alt="Sofa" className=''/>
        </SwiperSlide>    
      </Swiper>
    </>
  );
}































































// import React from 'react'
// import sofa from "../assets/sofa.png"

// function SofaAnimation() {
//   return (
//     <div className=''>
//       <img src={sofa} alt="Sofa" className=''/>
//     </div>
//   )
// }

// export default SofaAnimation
