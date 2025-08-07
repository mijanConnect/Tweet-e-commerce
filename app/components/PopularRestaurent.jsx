"use client";

import Image from "next/image";
import Slider from "react-slick";
import Heading from "./Heading";
import RestaurentCard from "./RestaurentCard";

// Custom Arrows
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

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
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

export default function PopularRestaurent() {
  return (
    <div className="container popular-restaurent-wrapper">
      <div className="popular-restaurent">
        <Heading
          hehadingTitle="Popular Restaurent"
          headingMainBlack="Popular"
          headingMainColor="Restaurent Near me"
        />
        <Slider {...settings} className="restaurent-slider">
          <div className="slide-wrapper">
            <RestaurentCard
              image="/images/restaurent/restaurent-1.png"
              name="Burger King"
            />
          </div>
          <div className="slide-wrapper">
            <RestaurentCard
              image="/images/restaurent/restaurent-2.png"
              name="Vienna's Delight"
            />
          </div>
          <div className="slide-wrapper">
            <RestaurentCard
              image="/images/restaurent/restaurent-3.png"
              name="AlpenFlair Bistro"
            />
          </div>
          <div className="slide-wrapper">
            <RestaurentCard
              image="/images/restaurent/restaurent-4.png"
              name="Mozart's Table"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
