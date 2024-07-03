import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div
    // className="bg-cover bg-center"
    // style={{
    //   backgroundImage: "url(./src/assets/makeupbrushes.jpg)",
    // }}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
