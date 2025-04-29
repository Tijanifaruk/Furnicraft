import React, { Component } from 'react';
import figmaSofa from "../assets/figmaSofa.jpg";
import figmaCupboard from "../assets/figmaCupboard.jpg";
import figmaTable from "../assets/figmaTable.jpg";
import { FaGreaterThan } from "react-icons/fa6";


class DifferentFurni extends Component {
  render() {
    return (
      <div className="p-8 bg-white">
        <div className="flex  flex-col md:flex-row gap-4 max-w-6xl mx-auto">
          {/* Left side - Sofa */}
          <div className="relative md:w-2/3 w-full rounded-xl overflow-hidden">
            <img src={figmaSofa} alt="Chair" className="w-full h-full object-cover" />
            <a href="#" className="absolute bottom-4 right-4">
            <button className="flex items-center gap-2 bg-tertiary font-bold text-white px-4 py-2 rounded-full text-sm hover:bg-primary/80 transition">
              Chairs <FaGreaterThan />
            </button>
          </a>

          


          </div>

          {/* Right side - Cupboard and Table stacked */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            {/* Cupboard */}
            <div className=" relative rounded-xl overflow-hidden">
              <img src={figmaCupboard} alt="Cupboard" className="w-full h-80 object-cover" />
              <a href="#" className='absolute bottom-4 right-4'><button className=" flex items-center gap-2 bg-tertiary font-bold text-white px-4 py-2 rounded-full text-sm hover:bg-primary/80 transition">
                Cupboard <FaGreaterThan />
              </button></a>
              
            </div>

            {/* Table */}
            <div className="relative rounded-xl overflow-hidden">
              <img src={figmaTable} alt="Table" className="w-full h-80 object-cover" />
              <a href="#" className='absolute bottom-4 right-4'><button className="flex items-center gap-2 bg-tertiary font-bold text-white px-4 py-2 rounded-full text-sm hover:bg-primary/80 transition">
                Tables <FaGreaterThan />
              </button></a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DifferentFurni;
