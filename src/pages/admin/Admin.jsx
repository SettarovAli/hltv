import React from "react";

import Column from "../../components/column/Column";
import AddMatch from "../../components/add-match/AddMatchContainer";
import AddTeam from "../../components/add-team/AddTeam";
import MatchesList from "../../components/matches-list/MatchesList";
import TeamsList from "../../components/teams-list/TeamsListContainer";

import { GridContainer } from "./AdminStyles";

const Admin = () => {
  return (
    <>
      <GridContainer>
        <Column area="matches">
          <AddMatch />
        </Column>
        <Column area="matches-right">
          <MatchesList />
        </Column>
        <Column area="teams">
          <AddTeam />
        </Column>
        <Column area="teams-right">
          <TeamsList />
        </Column>
      </GridContainer>
    </>
  );
};

export default Admin;
