import React from "react";
import { Link } from "react-router-dom";

import MainContentLogo from "../main-content-logo/MainContentLogo";

import {
  MainContentContainer,
  MainContentContainerWidth,
} from "./MainContentStyles";

const MainContent = ({ children }) => {
  return (
    <MainContentContainer>
      <MainContentContainerWidth>
        <Link to="/">
          <MainContentLogo />
        </Link>

        {children}
      </MainContentContainerWidth>
    </MainContentContainer>
  );
};

export default MainContent;
