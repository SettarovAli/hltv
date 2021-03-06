import React from "react";
import { connect } from "react-redux";

import Column from "../../components/column/Column";
import TeamProfile from "../../components/team-profile/TeamProfile";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./TeamStyles";

import { selectTeam } from "../../redux/teams/teamsSelectors";

const Team = ({ team }) => {
  return (
    <GridContainer>
      <Column area="column-left"></Column>
      <Column area="column-content">
        <TeamProfile team={team} />
      </Column>
      <Column area="column-right">
        <MatchesList />
      </Column>
    </GridContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  team: selectTeam(ownProps.match.params.teamId)(state),
});

export default connect(mapStateToProps)(Team);
