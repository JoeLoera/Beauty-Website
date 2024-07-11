import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <HeroSection />

      <Services />
      <Footer />
    </>
  );
};

export default App;
