import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Review from "./Review";

const ratings = 3.2;
const Reviews = () => {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <h1 className="text-teal-700 text-4xl text-center mb-10">
          Customer Reviews
        </h1>

        <Slider {...settings}>
          {[...Array(12)].map((_, i) => (
            <Review key={i} ratings={ratings} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
