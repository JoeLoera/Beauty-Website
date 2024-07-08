import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <HeroSection />

      <Services />
    </>
  );
};

export default App;
