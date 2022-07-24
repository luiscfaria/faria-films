import React from "react";
import "./Header.styles.css";
import { Menu } from "antd";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Menu mode="horizontal" theme="dark" style={{height: '97%', backgroundColor: 'black'}}>
          <Menu.Item key="trending">
            <a href="/">Trending</a>
          </Menu.Item>
          <Menu.Item key="movies">
            <a href="/movies">Movies</a>
          </Menu.Item>
          <Menu.Item key="series">
            <a href="/series">Series</a>
          </Menu.Item>
          <Menu.Item key="artists">
            <a href="/artists">Artists</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
