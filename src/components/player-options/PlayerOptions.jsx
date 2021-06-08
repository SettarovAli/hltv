import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPlayersForPreview } from "../../redux/players/playersSelectors";

const PlayerOptions = ({ players }) => {
  return (
    <>
      <option value={""}></option>
      {players.map((player, i) => {
        return (
          <option key={i} value={player.nickName}>
            {player.nickName}
          </option>
        );
      })}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  players: selectPlayersForPreview,
});

export default connect(mapStateToProps)(PlayerOptions);
