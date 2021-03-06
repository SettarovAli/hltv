import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTeamsObject } from "../../redux/teams/teamsSelectors";
// import { Route } from "react-router-dom";

// import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
// import DeleteIcon from "@material-ui/icons/Delete";
import TeamRow from "../team-row/TeamRow";

// import { removeMatch } from "../../redux/matches/matchesActions";

import {
  MatchItemContainer,
  TeamsContainer,
  Time,
  MatchItemLink,
  // ScoreContainer,
} from "./MatchItemStyles";

// const DeleteMatch = ({ match, removeMatch }) => {
//   return (
//     <div onClick={() => removeMatch(match)}>
//       <TouchIconComponent
//         Icon={DeleteIcon}
//         fontSize={"default"}
//         color={"error"}
//       />
//     </div>
//   );
// };

const MatchItem = ({ match, teams }) => {
  let { team1, team2, date, id } = match;
  team1 = teams[team1];
  team2 = teams[team2];

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

  return (
    <MatchItemContainer>
      <MatchItemLink to={`/matches/${id}`}>
        <TeamsContainer>
          <TeamRow country={team1.country} name={team1.name} />
          <TeamRow country={team2.country} name={team2.name} />
        </TeamsContainer>
        <Time>{generateTime(date)}</Time>
      </MatchItemLink>

      {/* <Route
        path="/admin"
        render={() => {
          return <DeleteMatch match={match} removeMatch={removeMatch} />;
        }}
      /> */}

      {/* <ScoreContainer>
        <div>14</div>
        <div>16</div>
      </ScoreContainer> */}
    </MatchItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsObject,
});

export default connect(mapStateToProps, {
  // removeMatch
})(MatchItem);
