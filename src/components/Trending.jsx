import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import ChaiseChair from "../assets/ChaiseChair.svg"
import AccentChair from "../assets/AccentChair.svg"
import OfficeTable from "../assets/OfficeTable.svg"
import FloorLamps from "../assets/FloorLamps.svg"
import Chester from "../assets/Chester.svg"
import RoundTable from "../assets/RoundTable.svg"
import { MdNavigateNext } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const trendingProducts = [
  { id: 1, name: "Accent Chairs", image: AccentChair, price: "$120.00", discount: "$96.00", discountPercent: "-20%" },
  { id: 2, name: "Chaise Sofa", image: ChaiseChair, price: "$200.00", discount: "$170.00", discountPercent: "-15%" },
  { id: 3, name: "Office Table", image: OfficeTable, price: "$500.00", discount: "$300.00", discountPercent: "-10%" },
  { id: 4, name: "Floor Lamp", image: FloorLamps, price: "$120.00", discount: "$80.00", discountPercent: "-10%" },
  { id: 5, name: "Chesterfield", image: Chester, price: "$600.00", discount: "$420.00", discountPercent: "-20%" },
  { id: 6, name: "Round Center Table", image: RoundTable, price: "$250.00", discount: "$50.00", discountPercent: "-10%" },
];


function Trending() {
  return (
    <div className='pt-24 bg-white'>
      <div className=' py-6 text-center text-tertiary bg-white '>
        <h1 className='font-bold text-3xl'>Trending Products</h1>
      </div>

 <div className='bg-lightestpurple'>
      <nav className='pt-5'>
        <ul  className='flex ml-16 text-sm font-medium '>
          <li className='mr-6 text-tertiary'><a href="#">Living Room</a></li>
          <li className='mr-6'><a href="#">Outdoor</a></li>
          <li className='mr-6'><a href="#">Indoor</a></li>
          <li className='mr-6'><a href="#">Dining Room</a></li>
        </ul>
      </nav>

      <div className="grid grid-cols-3 gap-6 pr-16 pl-16 p-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-lightPurple rounded-lg shadow-lg text-center">
              <div className='flex justify-between item-center  p-4'>
              <div className="flex items-center bg-white p-2 rounded-2xl">
                <span className="text-sm font-semibold mr-3 text-tertiary">{product.name}</span>
                <span className="text-red-500 text-xs bg-purple p-1 rounded-xl">{product.discountPercent}</span>
              </div>
              <FaRegHeart className="cursor-pointer mt-2 " />
              </div>
            


              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mt-2" />
              <div className="flex justify-center text-center  mt-4 pl-2 items-center">
                <span className="text-gray-400 line-through pr-2">{product.price}</span>
                <span className="text-lg font-bold">{product.discount}</span>
              </div>

               <button className='flex py-3 w-full bg-tertiary justify-center items-center rounded-lg text-white'>
              <FaShoppingCart />
              </button>
                
              
            </div>

            

             
            
          ))}
        </div>

        <div className="flex justify-center py-4  ">
          <button className="flex items-center justify-center border border-tertiary text-tertiary w-1/5 p-1 rounded-full hover:bg-tertiary hover:text-white">
          <span className=' underline  mr-2 '>See More Products</span>
            <MdNavigateNext className=''/>
          </button>
        </div>

    </div>
    </div>
  )
}

export default Trending
