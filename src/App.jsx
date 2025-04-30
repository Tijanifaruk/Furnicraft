import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import './App.css'
import Services from "./components/Services"
import CheckOut from "./components/CheckOut"
import NewCollections from "./components/NewCollections"
import Featured from "./components/Featured"
import Trending from "./components/Trending"
import DifferentFurni from "./components/DifferentFurni"
import Testimonies from "./components/Testimonies"
import CommonQ from "./components/CommonQ";
import ShopNow from "./components/ShopNow"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
       <div className="min-h-screen w-full bg-white text-black font-inter">
        <Navbar />
        <Hero />
        {/* <Services /> */}
        <CheckOut />
        <NewCollections />
        <Featured />
        <Trending />
        <DifferentFurni />
        <Testimonies />
        <CommonQ />
        <ShopNow />
        <Footer />
       </div>
    )
  }
}

export default App;
