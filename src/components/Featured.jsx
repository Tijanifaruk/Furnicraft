import React from 'react';
import RoyalTable from "../assets/RoyalTable.svg";
import ModernTable from "../assets/ModernTable.svg";
import WallClock from "../assets/WallClock.svg";
import TableLamp from "../assets/TableLamp.svg";
import OfficeChair from "../assets/OfficeChair.svg";


const products = [
  { title: "Royal Center Table", image: RoyalTable, link: "#" },
  { title: "Modern Center Table", image: ModernTable, link: "#" },
  { title: "Wall Clock", image: WallClock, link: "#" },
  { title: "Table Lamp", image: TableLamp, link: "#" },
  { title: "Office Chair", image: OfficeChair, link: "#" },
];

function Featured() {
  return (
    <div className='bg-white '>
      <div className='py-6 text-center text-tertiary'>
        <h1 className='font-bold text-3xl'>Featured Categories</h1>
      </div>

      <div className='flex pt-4 pr-16 pl-16 justify-around'>
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <a href={product.link} className="text-center">
              <div className="w-24 h-24 bg-purple rounded-full flex items-center justify-center ml-6">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-contain" />
              </div>
              <h2 className="font-semibold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-500">Discover more products</p>
            </a>
          </div>
        ))}


     

      </div>
    </div>
  );
}

export default Featured;
