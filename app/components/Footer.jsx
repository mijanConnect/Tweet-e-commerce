"use client";

import { Button, Col, Input, Layout, Row, Space } from "antd";
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
                    <a href="#">
                      <img src="/images/footer/logo.png" alt="logo" />
                    </a>
                    <p className="footer-item-left-text">
                      Your go-to choice for fast and fresh delivery, bringing
                      the best to your door in no time
                    </p>
                    <div className="footer-social-links">
                      <a href="#" className="footer-social-link">
                        <img src="/images/footer/facebook.png" alt="icon" />
                      </a>
                      <a href="#" className="footer-social-link">
                        <img src="/images/footer/twitter.png" alt="icon" />
                      </a>
                      <a href="#" className="footer-social-link">
                        <img src="/images/footer/linkedin.png" alt="icon" />
                      </a>
                      <a href="#" className="footer-social-link">
                        <img src="/images/footer/whatsapp.png" alt="icon" />
                      </a>
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
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">How We Work</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
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
                        <a href="#">Privacy Policies</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Faq</a>
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
                        <img src="/images/footer/mail.png" alt="icon" />
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
