import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectPlayersForPreview } from "../../redux/players/playersSelectors";
import PlayerItem from "../player-item/PlayerItem";

import { MatchItemContainer } from "../match-item/MatchItemStyles";

const PlayersList = ({ players }) => {
  return (
    <div>
      <h2 className="column-heading">Players</h2>
      {players.length ? (
        players.map((player, i) => {
          return (
            <Link key={i} to={`/players/${player.id}`}>
              <PlayerItem player={player} />
            </Link>
          );
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
