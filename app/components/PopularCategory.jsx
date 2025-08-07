"use client";

import { Card } from "antd";
import Slider from "react-slick";
import Heading from "./Heading";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const { Meta } = Card;
const categories = [
  {
    key: 1,
    title: "Donuts",
    img: "/images/category/donuts.png",
    color: "#E1B47B",
  },
  {
    key: 2,
    title: "Pizza",
    img: "/images/category/pizza.png",
    color: "#FA8D1C",
  },
  {
    key: 3,
    title: "Kebab",
    img: "/images/category/kebab.png",
    color: "#FD683E",
  },
  {
    key: 4,
    title: "Burger",
    img: "/images/category/burger.png",
    color: "#FF8000",
  },
  {
    key: 5,
    title: "Sandwitch",
    img: "/images/category/sandwitch.png",
    color: "#F75E28",
  },
  {
    key: 6,
    title: "Shawarma",
    img: "/images/category/shawarma.png",
    color: "#FCBD00",
  },
  {
    key: 7,
    title: "Taco",
    img: "/images/category/taco.png",
    color: "#DA270F",
  },
  {
    key: 8,
    title: "Sandwitch",
    img: "/images/category/sandwitch.png",
    color: "#F75E28",
  },
  {
    key: 9,
    title: "Kebab",
    img: "/images/category/kebab.png",
    color: "#FD683E",
  },
];

export default function PopularCategory() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 6 } },
      { breakpoint: 1200, settings: { arrows: false, slidesToShow: 5 } },
      { breakpoint: 1150, settings: { arrows: false, slidesToShow: 5 } },
      { breakpoint: 992, settings: { arrows: false, slidesToShow: 4 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 3 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 2 } },
    ],
  };

  return (
    <div className="container">
      <div className="popular-category">
        <Heading
          hehadingTitle="Category"
          headingMainBlack="Popular"
          headingMainColor="Category"
        />
        <Slider {...settings} className="slider-custom-padding">
          {categories.map(({ key, title, img, color }) => (
            <div key={key} style={{ padding: 8 }}>
              <Card
                hoverable
                style={{
                  width: 150,
                  textAlign: "center",
                  backgroundColor: color,
                  margin: "0 auto",
                }}
                cover={<img alt={title} src={img} style={{ marginTop: -10 }} />}
                onClick={() => console.log(`Clicked on ${title}`)}
              >
                <Meta
                  title={<div className="category-item-text">{title}</div>}
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
