import React from "react";

import Column from "../../components/column/Column";
import AddMatch from "../../components/add-match/AddMatchContainer";
import AddTeam from "../../components/add-team/AddTeam";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./AdminStyles";

const Admin = () => {
  return (
    <>
      <GridContainer>
        <Column area="column-content">
          <AddMatch />
          <AddTeam />
        </Column>
        <Column area="column-right">
          <MatchesList />
        </Column>
      </GridContainer>
    </>
  );
};

export default Admin;
