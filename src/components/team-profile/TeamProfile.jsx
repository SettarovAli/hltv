import React from "react";

import Flag from "../flag/Flag";

import TeamLineup from "../team-lineup/TeamLineup";

import {
  TeamInfo,
  TeamLogoContainer,
  TeamInfoContainer,
  TeamLogoImage,
} from "./TeamProfileStyles";

const TeamProfile = ({ team }) => {
  if (!team) return null;
  const { country, name, logoLink } = team;
  return (
    <>
      <TeamLineup team={team} />
      <TeamInfo>
        <TeamLogoContainer>
          <TeamLogoImage src={logoLink} alt="Logo" />
        </TeamLogoContainer>
        <TeamInfoContainer>
          <Flag code={country} />
          <h1>{name}</h1>
        </TeamInfoContainer>
      </TeamInfo>
    </>
  );
};

export default TeamProfile;
