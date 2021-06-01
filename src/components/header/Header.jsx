import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import LogoSmall from "../../assets/logo-small.png";

import { HeaderConatiner, NavContainer, NavLink } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderConatiner>
        <NavContainer>
          <NavLink to="/" className="small-logo">
            <img className="small-logo-img" src={LogoSmall} alt="Small logo" />
          </NavLink>
          <NavLink to="/">News</NavLink>
          <NavLink to="/matches">Matches</NavLink>
          <NavLink to="/results">Results</NavLink>
          <NavLink to="/admin">
            <LockIcon
              style={{ transform: "translateY(-2px)", marginRight: "3px" }}
            />{" "}
            Admin
          </NavLink>
        </NavContainer>
      </HeaderConatiner>
    </>
  );
};

export default Header;
