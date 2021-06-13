import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPlayersForPreview } from "../../redux/players/playersSelectors";
import PlayerItem from "../player-item/PlayerItem";

import { MatchItemContainer } from "../match-item/MatchItemStyles";

const PlayersList = ({ players }) => {
  return (
    <div>
      <h2 className="column-heading">Players</h2>
      {players.length ? (
        players.map((player, i) => {
          return <PlayerItem key={i} player={player} />;
        })
      ) : (
        <MatchItemContainer>There are no players</MatchItemContainer>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  players: selectPlayersForPreview,
});

export default connect(mapStateToProps)(PlayersList);
