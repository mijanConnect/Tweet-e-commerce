"use client";

import { Avatar, Card, Rate, Typography } from "antd";
import Image from "next/image";
import Heading from "./Heading";

const { Title, Paragraph } = Typography;

export default function TestimonialSection({
  hehadingTitle,
  headingMainBlack,
}) {
  return (
    <div className="container">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <Heading
            hehadingTitle="Testimonial"
            headingMainBlack="What"
            headingMainColor="About our Services"
          />
          <Heading headingMainBlack="About our Services" />
          <Card className="testimonial-card">
            <Paragraph className="testimonial-quote">
              Love the convenience of Tweet! Fast, reliable, and super easy to
              use for all your food delivery cravings.
            </Paragraph>
            <div className="testimonial-footer">
              <div className="testimonials-profile">
                <Avatar size={48} src="/images/testimonials/avater.png" />
                <div>
                  <p className="testimonial-name">Leon Fischer</p>
                  <p className="testimonial-role">Satisfied Customer</p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="testimonial-stars" />
            </div>
          </Card>
        </div>

        <div className="testimonial-right">
          <Image
            src="/images/testimonials/cover.png"
            alt="Dish"
            width={638}
            height={521}
            className="testimonial-dish"
          />
        </div>
      </div>
    </div>
  );
}
