import React from "react";
import styled from "styled-components";

import Flag from "../flag/Flag";

const NewsItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;

  &:hover {
    background-color: #ededef;
    cursor: pointer;
  }

  & + & {
    border-top: 1px solid #ccc;
  }
`;

const FlagContainer = styled.div`
  flex: 0 0 auto;
`;

const NewsTitle = styled.div`
  font-size: 14px;
  flex: 1 1 auto;
  text-decoration: none;
  color: #2d6da3;
  font-weight: 700;
`;

const NewsTime = styled.div`
  opacity: 0.75;
`;

const NewsItem = () => {
  return (
    <NewsItemContainer>
      <FlagContainer>
        <Flag code="US" />
      </FlagContainer>

      <NewsTitle>Tomkeejs joins Sinners as coach</NewsTitle>
      <NewsTime>18 minutes ago</NewsTime>
    </NewsItemContainer>
  );
};

export default NewsItem;
