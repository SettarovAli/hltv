import React from "react";

import Column from "../../components/column/Column";

import MatchItem from "../../components/match-item/MatchItem";
import NewsList from "../../components/news-list/NewsList";

import { GridContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <GridContainer>
      <Column area="column-left">
        <MatchItem />
      </Column>
      <Column area="column-content">
        <NewsList />
      </Column>
      <Column area="column-right">
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
        <MatchItem />
      </Column>

      <Column area="column-right-2">
        <MatchItem />
      </Column>
    </GridContainer>
  );
};

export default HomePage;
