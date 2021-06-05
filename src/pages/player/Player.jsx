import React from "react";
import { connect } from "react-redux";

import Column from "../../components/column/Column";
import PlayerProfile from "../../components/player-profile/PlayerProfile";
import MatchesList from "../../components/matches-list/MatchesList";

import { GridContainer } from "./PlayerStyles";

import { selectPlayer } from "../../redux/players/playersSelectors";

const Player = ({ player }) => {
  return (
    <GridContainer>
      <Column area="column-left"></Column>
      <Column area="column-content">
        <PlayerProfile player={player} />
      </Column>
      <Column area="column-right">
        <MatchesList />
      </Column>
    </GridContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  player: selectPlayer(ownProps.match.params.playerId)(state),
});

export default connect(mapStateToProps)(Player);
