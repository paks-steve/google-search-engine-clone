import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__left">
          <a href="https://about.google/">About</a>
          <a href="https://store.google.com/">Store</a>
        </div>
        <div className="home__header__right">
          <a href="https://mail.google.com/">Gmail</a>
          <a href="https://www.google.com/imghp?hl=en">Images</a>
          <AppIcon />
          <Avatar  />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Company Logo"
        />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
