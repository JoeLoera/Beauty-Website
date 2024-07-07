import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-">
        <HeroSection />
        <ImageCarousel />
        <Services />
      </div>
    </>
  );
};

export default App;
