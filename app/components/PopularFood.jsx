"use client";

import Image from "next/image";
import Slider from "react-slick";
import FoodCard from "./FoodCard";
import Heading from "./Heading";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        right: -18,
        zIndex: 1,
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <Image
        src="/images/category/arrow-right.png"
        alt="Next"
        width={48}
        height={48}
        className="custom-arrow-right"
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        left: -25,
        zIndex: 1,
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <Image
        src="/images/category/arrow-right.png"
        alt="Previous"
        width={48}
        height={48}
        className="custom-arrow-left"
      />
    </div>
  );
}

// Slider Settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  centerPadding: "0px",
  draggable: true,
  swipe: true,
  touchMove: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1150,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
      },
    },
  ],
};

export default function PopularFood() {
  return (
    <div className="container">
      <div className="popular-food">
        <Heading
          hehadingTitle="Popular Food"
          headingMainBlack="Popular"
          headingMainColor="Food Near Me"
        />
        <Slider {...settings} className="slider-custom-padding">
          <div style={{ padding: "0 12px" }}>
            <FoodCard image="/images/food/popular-food-1.png" />
          </div>
          <div style={{ padding: "0 12px" }}>
            <FoodCard image="/images/food/popular-food-2.png" />
          </div>
          <div style={{ padding: "0 12px" }}>
            <FoodCard image="/images/food/popular-food-3.png" />
          </div>
          <div style={{ padding: "0 12px" }}>
            <FoodCard image="/images/food/popular-food-4.png" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
