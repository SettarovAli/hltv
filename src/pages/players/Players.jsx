import React from "react";

import Column from "../../components/column/Column";
import PlayersList from "../../components/players-list/PlayersListContainer";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./PlayersStyles";

const Players = () => {
  return (
    <>
      <GridContainer>
        <Column area="column-content">
          <PlayersList />
        </Column>
        <Column area="column-right">
          <MatchesList />
        </Column>
      </GridContainer>
    </>
  );
};

export default Players;
