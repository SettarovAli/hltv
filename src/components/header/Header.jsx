import React from "react";

import LogoSmall from "../../assets/logo-small.png";

import { HeaderConatiner, NavContainer, NavLink } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderConatiner>
        <NavContainer>
          <NavLink className="small-logo">
            <img className="small-logo-img" src={LogoSmall} alt="Small logo" />
          </NavLink>
          <NavLink>News</NavLink>
          <NavLink>Matches</NavLink>
          <NavLink>Results</NavLink>
        </NavContainer>
      </HeaderConatiner>
    </>
  );
};

export default Header;
