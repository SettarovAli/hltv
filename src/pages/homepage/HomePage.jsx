import React from "react";

import Column from "../../components/column/Column";
import MatchesList from "../../components/matches-list/MatchesList";
import NewsList from "../../components/news-list/NewsList";

import { GridContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <GridContainer>
      <Column area="column-left"></Column>
      <Column area="column-content">
        <NewsList />
      </Column>
      <Column area="column-right">
        <MatchesList />
      </Column>
      <Column area="column-right-2"></Column>
    </GridContainer>
  );
};

export default HomePage;
