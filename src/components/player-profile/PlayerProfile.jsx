import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTeamsObject } from "../../redux/teams/teamsSelectors";
import TeamItem from "../team-item/TeamItem";

import Flag from "../flag/Flag";

import {
  PlayerInfo,
  PlayerLogoContainer,
  PlayerInfoContainer,
  PlayerLogoImage,
} from "./PlayerProfileStyles";

const PlayerProfile = ({ player, teams }) => {
  if (!player) return null;
  const { country, nickName, fullName, logoLink, currentTeam } = player;
  return (
    <PlayerInfo>
      <PlayerLogoContainer>
        <PlayerLogoImage src={logoLink} alt="Logo" />
      </PlayerLogoContainer>
      <PlayerInfoContainer>
        <Flag code={country} />
        <h1>{nickName}</h1>
        <h2>{fullName}</h2>
        <TeamItem team={teams[currentTeam]} />
      </PlayerInfoContainer>
    </PlayerInfo>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsObject,
});

export default connect(mapStateToProps)(PlayerProfile);
