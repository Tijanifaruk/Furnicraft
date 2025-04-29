
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import '../App.css';
// import Whitechairss from "../assets/Whitechairss.svg"
import Blacksofa from "../assets/Blacksofa.svg"
import Newbrown from "../assets/Newbrown.svg"



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
        {/* <SwiperSlide>
          <img src={Whitechairss} 
          alt="Sofa" className='Sofa'/>
        </SwiperSlide> */}

        <SwiperSlide>
          <img src={Blacksofa} alt="Sofa" /> 
        </SwiperSlide>   

        <SwiperSlide>
          <img src={Newbrown} alt="Sofa" />
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
