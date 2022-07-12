import React from "react";
import './Header.styles.css'
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["trending"]}>
          <Menu.Item key="trending" icon={<MailOutlined />}>
            Trending
          </Menu.Item>
          <Menu.Item key="movies" icon={<MailOutlined />}>
            Movies
          </Menu.Item>
          <Menu.Item key="series" icon={<MailOutlined />}>
            Series
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
