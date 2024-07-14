import React from "react";

const HeroSection = () => {
  return (
    <div
      className="pt-1 pb-1"
      // style={{ backgroundColor: "rgba(183, 110, 121, .7)", color: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mt-1 mb-8">
          <p
            className="mt-3 sm:mt-6 text-xl sm:text-2xl lg:text-3xl text-center max-w-xs sm:max-w-lg lg:max-w-4xl mx-auto py-4 px-6 bg-opacity-50 "
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Michelle B. excels in creating stunning looks for weddings, events,
            and photoshoots. With years of experience, she enhances natural
            beauty, leaving clients looking and feeling their best. For any
            occasion, Michelle is LA's go-to makeup artist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
