import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-">
        <HeroSection />
        <ImageCarousel />
      </div>
    </>
  );
};

export default App;
