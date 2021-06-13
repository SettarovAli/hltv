import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import isEmpty from "lodash.isempty";

import { selectPlayersObject } from "../../redux/players/playersSelectors.js";

import Flag from "../flag/Flag";

import {
  TeamLineupContainer,
  TeamLineupLink,
  PlayerInfo,
  AvatarImage,
  PlayerName,
} from "./TeamLineupStyles";

const TeamLineup = ({ team: { players }, allPlayers, details, fontSize }) => {
  if (isEmpty(allPlayers)) return null;
  return (
    <TeamLineupContainer>
      {players.map((player, i) => {
        if (!allPlayers[player]) return null;
        const { nickName, country, logoLink, id } = allPlayers[player];
        return (
          <TeamLineupLink key={i} to={`/players/${id}`}>
            <AvatarImage src={logoLink} />
            {details ? (
              <PlayerInfo>
                <Flag code={country} />
                <PlayerName fontSize={fontSize}>{nickName}</PlayerName>
              </PlayerInfo>
            ) : null}
          </TeamLineupLink>
        );
      })}
    </TeamLineupContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  allPlayers: selectPlayersObject,
});

export default connect(mapStateToProps)(TeamLineup);
