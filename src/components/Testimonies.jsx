import React from "react";
import TestimonyImage from '../assets/TestimonyImage.svg'
import { SlLike } from "react-icons/sl";
import Vector from "../assets/Vector.svg"
import { FaRegStar } from "react-icons/fa";





const Testimonial = () => {
  return (
    <div className=" mx-auto font-inter">
      {/* Header Section */}
      <div className="flex py-6 justify-center items-center text-tertiary bg-white">
        <SlLike className="bg-tertiary text-white h-6 w-6 p-1 rounded-full"/>
        <h1 className="font-bold text-3xl">Testimonies</h1>
      </div>
                   
      {/* Testimonial Card */}
      <div className="bg-lightestpurple">
      <div className=" flex justify-center pt-14 pr-20 pl-24 pb-12 ">
        {/* Image Section */}
        
        <img
          src={TestimonyImage} // Replace with actual image
          alt="Person"
          className="  w-80 h-50 object-contain "
        />




        {/* Testimonial Content */}
        <div className=" relative w-1/2 bg-new pr-24 pt-28 pl-20 text-white">
       
        <div className="flex space-x-1 text-white text-2xl mb-8 ">
      {[...Array(5)].map((_, i) => (
        <FaRegStar key={i}  />
      ))}
    </div>

          {/* Star Ratings */}
          {/* <div className="">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div> */}
        
        <img src={Vector} alt="Vector" className="absolute top-8 right-24 w-12 opacity-20 "/>

          {/* Testimonial Text */}
          <p className="mb-10 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. 
          </p>

          {/* Name */}
          <p className="text-sm font-bold">Anthony Basinger</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
