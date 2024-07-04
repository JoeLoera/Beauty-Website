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
    <div className="mt-12">
      {" "}
      {/* Added top margin to the carousel */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
