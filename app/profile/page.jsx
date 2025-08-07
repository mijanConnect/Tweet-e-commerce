"use client";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout } from "antd";
import { useEffect, useState } from "react";
import ProfileContent from "./components/ProfileContent";
import ProfileSidebar from "./components/ProfileSidebar";

const { Sider, Content } = Layout;

export default function ProfilePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 778);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <Layout
        style={{ minHeight: "100vh", marginBottom: 224 }}
        className="profile-content-layout"
      >
        {isMobile ? (
          <>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setSidebarVisible(true)}
              className="sidebar-toggle-btn"
            />
            <Drawer
              placement="left"
              closable
              onClose={() => setSidebarVisible(false)}
              open={sidebarVisible}
              closeIcon={<CloseOutlined />}
              width={250}
            >
              <div className="sidebar-profile-info">
                <div className="sidebar-profile-bg"></div>
                <img
                  src="/images/profile/profile.png"
                  alt="profile"
                  className="sidebar-profile-img"
                />
                <h3 className="sidebar-profile-name">Mark Jecno</h3>
                <p className="sidebar-profile-gmail">mark-jecno@gmail.com</p>
              </div>
              <ProfileSidebar />
            </Drawer>
          </>
        ) : (
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
        )}
        <Layout className="profile-content-layout">
          <Content className="profile-content">
            <ProfileContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
