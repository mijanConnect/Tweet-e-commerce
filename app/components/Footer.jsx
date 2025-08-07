"use client";

import { Button, Col, Input, Layout, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import Copyright from "./Comyright";
const { Footer } = Layout;
const { Search } = Input;
const baseStyle = {
  width: "25%",
};

export default function FooterDesign() {
  return (
    <>
      <Footer>
        <div className="footer">
          <div className="container">
            <Row gutter={[52, 16]} wrap>
              <Col xs={24} sm={24} md={12} lg={{ flex: "0 0 30%" }}>
                <div className="box">
                  <div className="footer-item-left">
                    <Link href="#">
                      <img src="/images/footer/logo.png" alt="logo" />
                    </Link>
                    <p className="footer-item-left-text">
                      Your go-to choice for fast and fresh delivery, bringing
                      the best to your door in no time
                    </p>
                    <div className="footer-social-links">
                      <Link href="#" className="footer-social-link">
                        <img src="/images/footer/facebook.png" alt="icon" />
                      </Link>
                      <Link href="#" className="footer-social-link">
                        <img src="/images/footer/twitter.png" alt="icon" />
                      </Link>
                      <Link href="#" className="footer-social-link">
                        <img src="/images/footer/linkedin.png" alt="icon" />
                      </Link>
                      <Link href="#" className="footer-social-link">
                        <img src="/images/footer/whatsapp.png" alt="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={{ flex: "0 0 20%" }}>
                <div className="box">
                  <div>
                    <h2>Quick Link</h2>
                    <ul>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">How We Work</Link>
                      </li>
                      <li>
                        <Link href="#">Career</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={{ flex: "0 0 20%" }}>
                <div className="box">
                  <div>
                    <h2>Quick Link</h2>
                    <ul>
                      <li>
                        <Link href="#">Privacy Policies</Link>
                      </li>
                      <li>
                        <Link href="#">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link href="#">Faq</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={{ flex: "0 0 30%" }}>
                <div className="box">
                  {" "}
                  <div>
                    <h2>Newsletter</h2>
                    <p className="subscribe">
                      Subscribe Our newsletter to get our Latest Update & News
                    </p>
                    <Space.Compact style={{ width: "100%" }}>
                      <Input
                        placeholder="Enter Email"
                        className="custom-input"
                      />
                      <Button type="primary" className="custom-input-button">
                        <Image
                          src="/images/footer/mail.png"
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </Button>
                    </Space.Compact>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Footer>
      <Copyright />
    </>
  );
}
