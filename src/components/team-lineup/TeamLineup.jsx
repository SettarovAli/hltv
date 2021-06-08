import React from "react";

import Flag from "../flag/Flag";

import {
  TeamLineupContainer,
  TeamLineupLink,
  PlayerInfo,
  AvatarImage,
} from "./TeamLineupStyles";

const TeamLineup = ({ team: { players } }) => {
  return (
    <TeamLineupContainer>
      {players.map((player, i) => {
        const { nickName, country, logoLink, id } = player;
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

export default TeamLineup;
