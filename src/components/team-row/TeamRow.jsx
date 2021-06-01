import React from "react";

import Flag from "../flag/Flag";

import { TeamRowContainer } from "./TeamRowStyles";

const TeamRow = ({ countryCode, teamName }) => {
  return (
    <TeamRowContainer>
      <Flag code={countryCode} />
      <span>{teamName}</span>
    </TeamRowContainer>
  );
};

export default TeamRow;
