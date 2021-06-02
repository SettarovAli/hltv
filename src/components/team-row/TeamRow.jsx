import React from "react";

import Flag from "../flag/Flag";

import { TeamRowContainer } from "./TeamRowStyles";

const TeamRow = ({ country, name }) => {
  return (
    <TeamRowContainer>
      <Flag code={country} />
      <span>{name}</span>
    </TeamRowContainer>
  );
};

export default TeamRow;
