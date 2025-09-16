import React from "react";
import "./header-style.css";

export const Header = (props) => {
  return (
    <header className="header-main">
      <div className="logo">
        <img src="./img/music.png" />
      </div>
      <div className="title">
        <h1> {props.title} </h1>
      </div>
    </header>
  );
};

export default Header;
