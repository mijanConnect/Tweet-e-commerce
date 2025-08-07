"use client";

import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h2 className="rancho hero-heading-one">Hungry?</h2>
              <h3 className="hero-heading-two">
                Let Us{" "}
                <span className="highlight">
                  Bring <br /> The Feast to You
                </span>
              </h3>
              <p className="hero-paragraph">
                Explore hundreds of delicious options from top restaurants and
                Enjoy fast, reliable delivery right to you.
              </p>
              <div className="search-background">
                <Input.Search
                  placeholder="Enter your location"
                  enterButton="Find Food"
                  size="large"
                  className="custom-search"
                  style={{ maxWidth: 585 }}
                />
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/images/hero/hero.png"
                alt="Hero"
                width={590}
                height={533}
                className="download-responsive-image-hero"
              />
              <div className="hero-cards">
                <Link href="">
                  <Image
                    src="/images/hero/card-1.png"
                    alt="Hero"
                    width={194}
                    height={150}
                    className="card-img-1"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/hero/card-2.png"
                    alt="Hero"
                    width={161}
                    height={83}
                    className="card-img-2"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/hero/card-3.png"
                    alt="Hero"
                    width={322}
                    height={140}
                    className="card-img-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
