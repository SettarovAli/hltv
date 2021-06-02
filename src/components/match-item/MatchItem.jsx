import React from "react";

import TeamRow from "../team-row/TeamRow";

import {
  MatchItemContainer,
  TeamsContainer,
  Time,
  ScoreContainer,
} from "./MatchItemStyles";

const MatchItem = ({ team1, team2, date, time }) => {
  const generateTime = (data) => {
    const checkTime = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    let h = date.getHours();
    let m = date.getMinutes();

    h = checkTime(h);
    m = checkTime(m);

    return `${h}:${m}`;
  };

  return (
    <MatchItemContainer>
      <TeamsContainer>
        <TeamRow country={team1.country} name={team1.name} />
        <TeamRow country={team2.country} name={team2.name} />
      </TeamsContainer>
      <Time>{generateTime(date)}</Time>
      {/* <ScoreContainer>
        <div>14</div>
        <div>16</div>
      </ScoreContainer> */}
    </MatchItemContainer>
  );
};

export default MatchItem;
