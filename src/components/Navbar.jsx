import React from "react";
import logo from '../assets/furnicraftlogo.svg'

function Navbar() {
  return (
    <nav className="flex justify-between  items-center border border-1 py-2 px-8 font-inter ">
      {/* Logo */}
      <div className="flex space-x-1 items-center w-1/2 md:w-1/4 lg:w-1/5">
        <img src={logo} alt="logo" />
        <h1 className="text-lg font-bold text-primary"><span className="text-secondary">Furni</span>Craft</h1>
      </div>

      {/*  Links */}
      <ul className="hidden md:flex items-center space-x-4 w-1/3 justify-around">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex items-center space-x-2 w-1/4 px-1">
        <button className="border border-indigo-600 text-primary py-2  w-1/2 rounded-xl hover:bg-primary hover:text-white transition">Log In</button>

        <button className="bg-primary text-white py-2  w-1/2 rounded-xl text-lg hover:bg-primary/80 transition">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;