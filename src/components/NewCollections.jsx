import React, { useState, useEffect } from 'react'; 
import { IoMdArrowDropdownCircle } from "react-icons/io";

function NewCollections() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const collections = [
    "Arm Chair",
    "Center Table",
    "Accent Chair",
    "Lamp",
    "Sofa",
    "Lamp",
    "Wing Chair",
    "Flore Lamps",
    "Square Table",
    "Modern Seaters",
  ];

  const initialVisible = 5; // how many items to show initially on mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint = 768px
    };

    handleResize(); // Check immediately on load
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCollections = isMobile
    ? (showAll ? collections : collections.slice(0, initialVisible))
    : collections; // Show full on desktop

  return (
    <div>
      {/* Heading */}
      <div className='bg-white py-6 text-center text-tertiary'>
        <h1 className='font-bold text-2xl md:text-3xl'>New Collections</h1>
      </div>

      {/* Collection Section */}
      <div className='bg-lightestpurple'>

        {/* Wrapper for all items */}
        <div className='mx-auto w-5/6 md:w-full flex flex-col md:flex-row md:justify-around py-8'>

          {/* Left Side */}
          <div className='flex flex-col md:w-2/5'>

            {visibleCollections.slice(0, Math.ceil(visibleCollections.length / 2)).map((item, index) => (
              <div key={index} className='bg-lightPurple flex justify-between items-center mb-2 px-6 md:py-3 py-4 rounded-lg text-xl font-semibold text-tertiary'>
                <p>{item}</p>
                <IoMdArrowDropdownCircle />
              </div>
            ))}

          </div>

          {/* Right Side */}
          <div className='flex flex-col md:w-2/5  md:mt-0'>

            {visibleCollections.slice(Math.ceil(visibleCollections.length / 2)).map((item, index) => (
              <div key={index} className='bg-lightPurple flex justify-between items-center mb-2 px-6 md:py-3 py-4 rounded-lg text-xl font-semibold text-tertiary'>
                <p>{item}</p>
                <IoMdArrowDropdownCircle />
              </div>
            ))}

          </div>

        </div>

        {/* See More / See Less Button (only mobile) */}
        {isMobile && (
          <div className='flex justify-center py-6'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='bg-white text-tertiary px-6 py-3 rounded-lg shadow-md font-semibold'
            >
              {showAll ? "See Less ▲" : "See More ▼"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default NewCollections;
