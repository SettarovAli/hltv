import React from "react";
import { connect } from "react-redux";

import Column from "../../components/column/Column";
import MatchesList from "../../components/matches-list/MatchesList";
import MatchHeader from "../../components/match-header/MatchHeader";
import MatchMaps from "../../components/match-maps/MatchMaps";
import MatchLineups from "../../components/match-lineups/MatchLineups";

import { GridContainer } from "./MatchStyles";

import { selectMatch } from "../../redux/matches/matchesSelectors";

const Match = ({ csMatch }) => {
  return (
    <>
      <GridContainer>
        <Column area="column-left"></Column>
        <Column area="column-content">
          <MatchHeader csMatch={csMatch} />
          <MatchMaps />
          <MatchLineups />
        </Column>
        <Column area="column-right">
          <MatchesList />
        </Column>
      </GridContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  csMatch: selectMatch(ownProps.match.params.matchId)(state),
});

export default connect(mapStateToProps)(Match);
