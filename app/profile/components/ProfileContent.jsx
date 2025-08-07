"use client";

import {
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";

const { Title, Text } = Typography;

export default function ProfileContent() {
  return (
    <div className="profile-content-wrapper">
      <Card className="form-card">
        <Form
          layout="vertical"
          className="tweet-form"
          initialValues={{
            name: "Mark Jecno",
            email: "mark-jecno@gmail.com",
            address: "93, Songbird Cir, Blackville, SC, USA-29817",
          }}
        >
          <div className="form-item-container">
            <h2 className="form-header">Profile</h2>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <UserOutlined className="form-input-icon" />
                    Name:
                  </span>
                }
                name="name"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input className="form-input-write" />
              </Form.Item>
            </div>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <MailOutlined className="form-input-icon" />
                    Email:
                  </span>
                }
                name="email"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input className="form-input-write" />
              </Form.Item>
            </div>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <HomeOutlined className="form-input-icon" />
                    Address:
                  </span>
                }
                name="address"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input className="form-input-write" />
              </Form.Item>
            </div>
          </div>
          <div className="button-align">
            <Button
              type="primary"
              htmlType="submit"
              className="profile-custom-button"
            >
              Update
            </Button>
          </div>
        </Form>
      </Card>
      <Card className="form-card">
        <Form layout="vertical" className="tweet-form">
          <div className="form-item-container">
            <h2 className="form-header">Change Password</h2>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <LockOutlined className="form-input-icon" />
                    Current Password:
                  </span>
                }
                name="current"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input.Password
                  placeholder="********"
                  iconRender={() => null}
                  className="form-input-write"
                />
              </Form.Item>
            </div>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <LockOutlined className="form-input-icon" />
                    New Password:
                  </span>
                }
                name="new"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input.Password
                  placeholder="********"
                  iconRender={() => null}
                  className="form-input-write"
                />
              </Form.Item>
            </div>
            <div className="form-input">
              <Form.Item
                label={
                  <span>
                    <LockOutlined className="form-input-icon" />
                    Confirm Password:
                  </span>
                }
                name="confirm"
                style={{ marginBottom: 0 }}
                className="form-item"
              >
                <Input.Password
                  placeholder="********"
                  iconRender={() => null}
                  className="form-input-write"
                />
              </Form.Item>
            </div>
          </div>
          <div className="button-align">
            <Button
              type="primary"
              htmlType="submit"
              className="profile-custom-button"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
