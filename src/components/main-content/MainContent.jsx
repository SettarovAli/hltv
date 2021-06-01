import React from "react";

import MainContentLogo from "../main-content-logo/MainContentLogo";

import {
  MainContentContainer,
  MainContentContainerWidth,
} from "./MainContentStyles";

const MainContent = ({ children }) => {
  return (
    <MainContentContainer>
      <MainContentContainerWidth>
        <MainContentLogo />
        {children}
      </MainContentContainerWidth>
    </MainContentContainer>
  );
};

export default MainContent;
