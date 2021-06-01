import React from "react";

import TeamRow from "../team-row/TeamRow";

import { MatchItemContainer, TeamsContainer, Time } from "./MatchItemStyles";

const MatchItem = () => {
  return (
    <MatchItemContainer>
      <TeamsContainer>
        <TeamRow countryCode="UA" teamName="Natus Vincere" />
        <TeamRow countryCode="BR" teamName="MIBR" />
      </TeamsContainer>
      <Time>11:00</Time>
    </MatchItemContainer>
  );
};

export default MatchItem;
