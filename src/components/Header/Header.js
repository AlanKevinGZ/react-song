import React from "react";
import "./header-style.css";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="header-main">
      <div >
       <h1> {props.title} </h1>
         
      </div>
      <div className="title">
       <nav>
        <Link to="/" >Search Music</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
