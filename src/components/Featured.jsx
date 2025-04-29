

import React from 'react';
import RoyalTable from "../assets/RoyalTable.svg";
import ModernTable from "../assets/ModernTable.svg";
import WallClock from "../assets/WallClock.svg";
import TableLamp from "../assets/TableLamp.svg";
import OfficeChair from "../assets/OfficeChair.svg";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  { title: "Royal Center Table", image: RoyalTable, link: "#" },
  { title: "Modern Center Table", image: ModernTable, link: "#" },
  { title: "Wall Clock", image: WallClock, link: "#" },
  { title: "Table Lamp", image: TableLamp, link: "#" },
  { title: "Office Chair", image: OfficeChair, link: "#" },
];

function Featured() {
  return (
    <div>
      <div className='py-6 text-center text-tertiary'>
        <h1 className='font-bold text-2xl md:text-3xl'>Featured Categories</h1>
      </div>

      <div className='pt-4 px-4 relative'>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <a href={product.link} className="text-center">
                  {/* Larger background with comfortably sized image */}
                  <div className="bg-purple rounded-full w-32 h-32 flex items-center justify-center mx-auto overflow-hidden">
  <img 
  src={product.image} 
  alt={product.title} 
  className="w-full h-full object-contain  p-8"
/>

</div>


                  <h2 className="font-semibold mt-3">{product.title}</h2>
                  <p className="text-sm text-gray-500">Discover more products</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation styling */}
        <style jsx>{`
          .swiper-button-next, .swiper-button-prev {
            color: purple;
            width: 30px;
            height: 30px;
            background: white;
            border-radius: 50%;
            box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Featured;


