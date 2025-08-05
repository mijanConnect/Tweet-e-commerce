"use client";

import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;

export default function RestaurentCard({ image, name }) {
  return (
    <>
      <Card
        hoverable
        className="custom-card"
        cover={
          <div className="custom-card-imageContainer">
            <Image
              src={image}
              alt="Tandoori Chicken"
              width={400}
              height={200}
              className="custom-card-image"
            />
            <div className="custom-card-badge">
              <Image
                src="/images/food/badge.png"
                alt="badge"
                width={20}
                height={20}
              />
              <p>30% Off</p>
            </div>
            <div className="custom-card-rating">
              <Image
                src="/images/food/star.png"
                alt="star"
                width={12}
                height={12}
              />
              <p>
                4.6 <span>(85)</span>
              </p>
            </div>
          </div>
        }
      >
        <div className="restaurent-details">
          <h2 className="custom-card-meta">{name}</h2>
          <div className="custom-card-details-bottom-restaurent">
            <div className="custom-card-delivery-time">
              <Image
                src="/images/food/clock.png"
                alt="icon"
                width={12}
                height={12}
              />
              <p className="custom-card-delivery-color">20-30 min</p>
            </div>
            <div className="custom-card-delivery-price">
              <Image
                src="/images/food/cycle.png"
                alt="icon"
                width={12}
                height={12}
              />
              <p className="custom-card-delivery-color">Delivery Fee $02</p>
            </div>
          </div>
          <div className="popular-restaurent-items">
            <p>Pasta</p>
            <p>|</p>
            <p>Burger</p>
            <p>|</p>
            <p>Pizza</p>
            <p>|</p>
            <p>Chiken Fry</p>
          </div>
        </div>
      </Card>
    </>
  );
}
