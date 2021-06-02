import React from "react";
import styled from "styled-components";

import NewsItem from "../news-item/NewsItem";

const NewsListContainer = styled.div`
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.4);
  background-color: #fff;
`;

const NewsList = () => {
  return (
    <NewsListContainer>
      <h2 className="column-heading">News</h2>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </NewsListContainer>
  );
};

export default NewsList;
