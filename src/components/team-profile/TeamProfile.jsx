import React from "react";

import Flag from "../flag/Flag";

import {
  TeamInfo,
  TeamLogoContainer,
  TeamInfoContainer,
} from "./TeamProfileStyles";

const TeamProfile = ({ team }) => {
  console.log(team);
  if (!team) return null;
  const { country, name, id, logoLink } = team;
  return (
    <TeamInfo>
      <TeamLogoContainer>
        <img src={logoLink} alt="Logo" />
      </TeamLogoContainer>
      <TeamInfoContainer>
        <Flag code={country} />
        <h1>{name}</h1>
      </TeamInfoContainer>
    </TeamInfo>
  );
};

export default TeamProfile;
