import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';

import ChaiseChair from "../assets/ChaiseChair.svg";
import AccentChair from "../assets/AccentChair.svg";
import OfficeTable from "../assets/OfficeTable.svg";
import FloorLamps from "../assets/FloorLamps.svg";
import Chester from "../assets/Chester.svg";
import RoundTable from "../assets/RoundTable.svg";
import logo from "../assets/furnicraftlogo.svg";

const trendingProducts = [
  { id: 1, name: "Accent Chairs", image: AccentChair, price: "$120.00", discount: "$96.00", discountPercent: "-20%" },
  { id: 2, name: "Chaise Sofa", image: ChaiseChair, price: "$200.00", discount: "$170.00", discountPercent: "-15%" },
  { id: 3, name: "Office Table", image: OfficeTable, price: "$500.00", discount: "$300.00", discountPercent: "-10%" },
  { id: 4, name: "Floor Lamp", image: FloorLamps, price: "$120.00", discount: "$80.00", discountPercent: "-10%" },
  { id: 5, name: "Chesterfield", image: Chester, price: "$600.00", discount: "$420.00", discountPercent: "-20%" },
  { id: 6, name: "Round Table", image: RoundTable, price: "$250.00", discount: "$50.00", discountPercent: "-10%" },
];

function Trending() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pt-24 bg-white relative">

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 pt-8 flex flex-col">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h1 className="text-xl font-bold text-primary">
                <span className="text-secondary">Furni</span>Craft
              </h1>
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <IoClose size={30} />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col w-full">
            <li className='py-4 border-b w-full'><a href="#" onClick={() => setMenuOpen(false)}>Outdoor</a></li>
            <li className='py-4 border-b w-full'><a href="#" onClick={() => setMenuOpen(false)}>Indoor</a></li>
            <li className='py-4 border-b w-full'><a href="#" onClick={() => setMenuOpen(false)}>Dining Room</a></li>
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex flex-col w-full space-y-4">
            <button className="border border-indigo-600 text-primary py-3 w-full rounded-xl hover:bg-primary hover:text-white transition">
              Log In
            </button>
            <button className="bg-primary text-white py-3 w-full rounded-xl text-lg hover:bg-primary/80 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      {/* Heading */}
      <div className="py-6 text-center text-tertiary bg-white">
        <h1 className="font-bold text-2xl md:text-3xl">Trending Products</h1>
      </div>

      <div className="bg-lightestpurple">
        {/* Navbar */}
        <nav className="ml-8 md:ml-0 relative flex items-center px-4 py-5 md:px-16">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <MdMenu size={28} />
          </button>

          {/* Title */}
          <div className="text-sm ml-3 text-tertiary md:hidden">
            Living Room
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li className="text-tertiary"><a href="#">Living Room</a></li>
            <li><a href="#">Outdoor</a></li>
            <li><a href="#">Indoor</a></li>
            <li><a href="#">Dining Room</a></li>
          </ul>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 md:px-16 py-6">
          {trendingProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-lightPurple rounded-lg shadow-lg text-center ${index > 2 ? 'hidden md:block' : ''}`}
            >
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center bg-white p-2 rounded-2xl">
                  <span className="text-xs font-semibold mr-3 text-tertiary">
                    {product.name}
                  </span>
                  <span className="text-red-500 text-xs bg-purple p-1 rounded-xl">
                    {product.discountPercent}
                  </span>
                </div>
                <FaRegHeart className="cursor-pointer mt-2" />
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mt-2 "
              />

              <div className="flex justify-center items-center mt-4 space-x-2 text-center pl-2">
                <span className="text-gray-400 line-through">{product.price}</span>
                <span className="text-lg font-bold">{product.discount}</span>
              </div>

              <button className="flex w-full py-3 bg-tertiary justify-center items-center rounded-lg text-white hover:bg-primary transition">
                <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center py-4">
          <button className="flex items-center justify-center border border-tertiary text-tertiary w-1/2 md:w-1/5 p-1 rounded-full hover:bg-tertiary hover:text-white">
            <span className="underline mr-2">See More Products</span>
            <MdNavigateNext />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Trending;
