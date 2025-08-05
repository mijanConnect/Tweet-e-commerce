"use client";

import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import Image from "next/image";
const { Meta } = Card;

export default function FoodCard({ image }) {
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
            <Tooltip title="Add to favorites">
              <HeartOutlined className="custom-card-heartIcon" />
            </Tooltip>
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
        <div>
          <div className="custom-card-details-top">
            <h2 className="custom-card-meta">Burger with Emmental Cheese</h2>
            <div className="custom-card-price">
              <p className="custom-card-price-regular">
                <del>€49.99</del>
              </p>
              <p className="custom-card-price-offer">€44.99</p>
            </div>
          </div>
          <div className="custom-card-details-bottom">
            <div className="custom-card-details-bottom-left">
              <div className="custom-card-shop">
                <Image
                  src="/images/food/shop.png"
                  alt="icon"
                  width={16}
                  height={16}
                />
                <p>Burger King</p>
              </div>
              <div className="custom-card-delivery">
                <div className="custom-card-delivery-time">
                  <Image
                    src="/images/food/clock.png"
                    alt="icon"
                    width={12}
                    height={12}
                  />
                  <p>30 min</p>
                </div>
                <div className="custom-card-delivery-price">
                  <Image
                    src="/images/food/cycle.png"
                    alt="icon"
                    width={12}
                    height={12}
                  />
                  <p>$02 </p>
                </div>
              </div>
            </div>
            <Button
              type="primary"
              className="custom-card-details-bottom-right-button"
            >
              +
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
