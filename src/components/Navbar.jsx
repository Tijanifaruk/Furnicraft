import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import logo from "../assets/furnicraftlogo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center  py-2 px-6 md:px-8 font-inter bg-white shadow-md  "
      >
        {/* */}
        {/* Logo */}
        <div className="flex space-x-1 items-center w-1/2 md:w-1/4 lg:w-1/5">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <h1 className="text-lg font-bold text-primary">
            <span className="text-secondary">Furni</span>Craft
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-4 w-1/3 justify-around">
          <li className="hover:font-bold"><a href="#features">Features</a></li>
          <li className="hover:font-bold"><a href="#about">About</a></li>
          <li className="hover:font-bold"><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2 w-1/4 px-1">
          <button className="border border-indigo-600 text-primary py-2 w-1/2 rounded-xl hover:bg-primary hover:text-white transition">
            Log In
          </button>
          <button className="bg-primary text-white py-2 w-1/2 rounded-xl text-lg hover:bg-primary/80 transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-10 p-6 pt-8">
          {/* Close Icon */}
          <div className="flex justify-between items-center mb-6">
            {/* <div className="flex space-x-2 items-center">
              <img src={logo} alt="logo" className="w-6 h-6" />
              <h1 className="text-lg font-bold text-primary">
                <span className="text-secondary">Furni</span>Craft
              </h1>
            </div> */}
            <button onClick={() => setMenuOpen(false)}>
              {/* <IoClose size={28} /> */}
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col w-full text-left">
            <li className="py-4 border-b w-full">
              <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            </li>
            <li className="py-4 border-b w-full">
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            </li>
            <li className="py-4 border-b w-full">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col w-full space-y-4">
            <button className="border border-indigo-600 text-primary py-3 w-full rounded-xl hover:bg-primary hover:text-white transition">
              Log In
            </button>
            <button className="bg-primary text-white py-3 w-full rounded-xl text-lg hover:bg-primary/80 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
