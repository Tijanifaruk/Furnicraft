import React from "react";
import TestimonyImage from '../assets/TestimonyImage.svg'
import { SlLike } from "react-icons/sl";
import Vector from "../assets/Vector.svg"
import { CiStar } from "react-icons/ci";

const Testimonial = () => {
  return (
    <div className="mx-auto font-inter">
      {/* Header Section */}
      <div className="flex py-6 justify-center items-center text-tertiary bg-white">
        <SlLike className="bg-tertiary text-white h-6 w-6 p-1 rounded-full" />
        <h1 className="font-bold text-2xl md:text-3xl">Testimonies</h1>
      </div>

      {/* Testimonial Card */}
      <div className="bg-lightestpurple ">
        <div className="flex flex-col md:flex-row justify-center items-center pt-14 pb-12 px-6 md:px-24">
          
          {/* Image Section */}
          <div className="relative w-full md:w-auto ">
            <img
              src={TestimonyImage}
              alt="Person"
              className="w-full md:w-80 h-auto object-cover rounded-md"
            />

            {/* Overlay Content for Mobile */}
            <div className="rounded-lg absolute inset-0 bg-new bg-opacity-80 flex flex-col justify-center items-start p-6 md:hidden text-white ">
              <div className="flex space-x-1 text-2xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <CiStar key={i} />
                ))}
              </div>

              <img src={Vector} alt="Vector" className="absolute top-4 right-4  w-16 opacity-20" />

              <p className="mb-6 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.
              </p>

              <p className="text-sm font-bold">Anthony Basinger</p>
            </div>
          </div>

          {/* Desktop Testimonial Content */}
          <div className="hidden md:block relative w-1/2 bg-new text-white p-4 lg:h-[470px] h-[450px] rounded-lg">
            <div className="flex space-x-1 text-3xl mb-8 mt-20">
              {[...Array(5)].map((_, i) => (
                <CiStar key={i} />
              ))}
            </div>

            <img src={Vector} alt="Vector" className="absolute top-8 right-8 w-12 opacity-20" />

            <p className="mb-10 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed.
            </p>

            <p className="text-sm font-bold">Anthony Basinger</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
