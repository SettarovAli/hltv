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
} from "./TeamLineupStyles";

const TeamLineup = ({ team: { players }, allPlayers }) => {
  if (isEmpty(allPlayers)) return null;
  return (
    <TeamLineupContainer>
      {players.map((player, i) => {
        const { nickName, country, logoLink, id } = allPlayers[player];
        return (
          <TeamLineupLink key={i} to={`/players/${id}`}>
            <AvatarImage src={logoLink} />
            <PlayerInfo>
              <Flag code={country} />
              <h3>{nickName}</h3>
            </PlayerInfo>
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
