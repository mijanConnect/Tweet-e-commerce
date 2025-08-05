"use client";

import { Card } from "antd";

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
  { key: 7, title: "Taco", img: "/images/category/taco.png", color: "#DA270F" },
];

export default function CategoryCard() {
  return (
    <div
      className="category-items"
      style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 65 }}
    >
      {categories.map(({ key, title, img, color }) => (
        <Card
          key={key}
          hoverable
          style={{ width: 150, textAlign: "center", backgroundColor: color }}
          cover={<img alt={title} src={img} style={{ marginTop: -10 }} />}
          onClick={() => {
            console.log(`Clicked on ${title}`);
          }}
        >
          <Meta title={<div className="category-item-text">{title}</div>} />
        </Card>
      ))}
    </div>
  );
}
