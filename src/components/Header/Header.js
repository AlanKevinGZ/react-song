import React from "react";

import { Link } from "react-router-dom";
import { HeaderMain } from "./styles";

export const Header = (props) => {
  return (
    <HeaderMain>
      <header className="header-main">
        <div>
          <h1> {props.title} </h1>
        </div>
      </header>
    </HeaderMain>
  );
};

export default Header;
