import React from "react";

import Flag from "../flag/Flag";

import {
  PlayerInfo,
  PlayerLogoContainer,
  PlayerInfoContainer,
  PlayerLogoImage,
} from "./PlayerProfileStyles";

const PlayerProfile = ({ player }) => {
  if (!player) return null;
  const { country, nickName, fullName, id, logoLink } = player;
  return (
    <PlayerInfo>
      <PlayerLogoContainer>
        <PlayerLogoImage src={logoLink} alt="Logo" />
      </PlayerLogoContainer>
      <PlayerInfoContainer>
        <Flag code={country} />
        <h1>{nickName}</h1>
        <h3>{fullName}</h3>
      </PlayerInfoContainer>
    </PlayerInfo>
  );
};

export default PlayerProfile;
