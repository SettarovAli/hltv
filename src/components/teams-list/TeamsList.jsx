import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTeamsForPreview } from "../../redux/teams/teamsSelectors";
import TeamItem from "../team-item/TeamItem";

import { MatchItemContainer } from "../match-item/MatchItemStyles";

const TeamsList = ({ teams }) => {
  return (
    <div>
      <h2 className="column-heading">Teams</h2>
      {teams.length ? (
        teams.map((team, i) => {
          return <TeamItem key={i} team={team} />;
        })
      ) : (
        <MatchItemContainer>There are no teams</MatchItemContainer>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps)(TeamsList);
