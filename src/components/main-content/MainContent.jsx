import React from "react";

import MainContentLogo from "../main-content-logo/MainContentLogo";
import MainContentColumns from "../main-content-columns/MainContentColumns";

import {
  MainContentContainer,
  MainContentContainerWidth,
} from "./MainContentStyles";

const MainContent = () => {
  return (
    <MainContentContainer>
      <MainContentContainerWidth>
        <MainContentLogo />
        <MainContentColumns />
      </MainContentContainerWidth>
    </MainContentContainer>
  );
};

export default MainContent;
