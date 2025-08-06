"use client";

import { Layout } from "antd";
import ProfileContent from "./components/ProfileContent";
import ProfileSidebar from "./components/ProfileSidebar";
const { Sider, Content } = Layout;

export default function ProfilePage() {
  return (
    <div className="container">
      <Layout
        style={{ minHeight: "100vh", marginBottom: 224 }}
        className="profile-content-layout"
      >
        <Sider width={250} theme="light" className="sidebar-wrapper">
          <div className="sidebar-profile-info">
            <div className="sidebar-profile-bg"> </div>
            <img
              src="/images/profile/profile.png"
              alt="profile"
              className="sidebar-profile-img"
            />
            <h3 className="sidebar-profile-name">Mark Jecno</h3>
            <p className="sidebar-profile-gmail">mark-jecno@gmail.com</p>
          </div>
          <ProfileSidebar />
        </Sider>
        <Layout className="profile-content-layout">
          <Content className="profile-content">
            <ProfileContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
