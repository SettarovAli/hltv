import React from "react";

import Column from "../../components/column/Column";
import AddMatch from "../../components/add-match/AddMatch";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./AdminStyles";

const Admin = () => {
  return (
    <>
      <GridContainer>
        <Column area="column-content">
          <AddMatch />
        </Column>
        <Column area="column-right">
          <MatchesList />
        </Column>
      </GridContainer>
    </>
  );
};

export default Admin;
