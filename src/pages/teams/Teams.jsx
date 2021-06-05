import React from "react";

import Column from "../../components/column/Column";
import TeamsList from "../../components/teams-list/TeamsListContainer";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./TeamsStyles";

const Teams = () => {
  return (
    <>
      <GridContainer>
        <Column area="column-content">
          <TeamsList />
        </Column>
        <Column area="column-right">
          <MatchesList />
        </Column>
      </GridContainer>
    </>
  );
};

export default Teams;
