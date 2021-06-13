import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectTeamsObject } from "../../redux/teams/teamsSelectors";

import {
  MatchHeaderContainer,
  TeamContainer,
  TeamCountry,
  TeamLogoLink,
  TeamName,
  DateContainer,
  Time,
  Date,
} from "./MatchHeaderStyles";

const MatchHeader = ({ csMatch, teams }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateTime = (date) => {
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

  const generateDate = (date) => {
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    return `${d} of ${months[m]} ${y}`;
  };

  if (!teams || !csMatch) return null;
  const team1 = teams[csMatch.team1];
  const team2 = teams[csMatch.team2];
  const date = csMatch.date;

  return (
    <MatchHeaderContainer>
      <TeamContainer>
        <TeamCountry
          code={team1.country}
          width="100%"
          height="100%"
          marginRight="0px"
          opacity="0.5"
        />
        <TeamLogoLink to={`/teams/${team1.id}`} gradient="right">
          <img src={team1.logoLink} alt="Team logo" height="60px" />
          <TeamName>{team1.name}</TeamName>
        </TeamLogoLink>
      </TeamContainer>
      <DateContainer>
        <Time>{generateTime(date)}</Time>
        <Date>{generateDate(date)}</Date>
      </DateContainer>
      <TeamContainer>
        <TeamCountry
          code={team2.country}
          width="100%"
          height="100%"
          marginRight="0px"
          opacity="0.5"
        />
        <TeamLogoLink to={`/teams/${team2.id}`} gradient="left">
          <img src={team2.logoLink} alt="Team logo" height="60px" />
          <TeamName>{team2.name}</TeamName>
        </TeamLogoLink>
      </TeamContainer>
    </MatchHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsObject,
});

export default connect(mapStateToProps)(MatchHeader);
