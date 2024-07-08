import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/photoshoot/crys.jpg";
import image2 from "../assets/photoshoot/green.jpg";
import image3 from "../assets/photoshoot/monica.jpg";
import image4 from "../assets/photoshoot/mar.jpg";
import image5 from "../assets/photoshoot/nick.jpg";
// Import other images as needed

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [image1, image2, image3, image4, image5]; // Assuming you have these variables defined

  return (
    <>
      <div
        className="pt-1 pb-1"
        style={{ backgroundColor: "rgba(186, 159, 147, 1)", color: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mt-6 mb-6">
            <h6 className="px-10 text-xl sm:text-3xl lg:text-4xl text-center tracking-wide font-semibold leading-normal">
              <i>“Beauty begins the moment you decide to be yourself”</i>
              <br />
              <span style={{ fontSize: "smaller" }}>- Charlotte Tilbury</span>
            </h6>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <div className="max-w-7xl mx-auto pt-7 pb-6 px-10">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden" style={{ height: "66.66%" }}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="rounded-lg shadow-lg mx-auto block"
                    style={{ width: "auto", height: "150%" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
