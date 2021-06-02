import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTeamsForPreview } from "../../redux/teams/teamsSelectors";

const TeamOptions = ({ teams }) => {
  return (
    <>
      <option value={""}></option>
      {teams.map((team, i) => {
        return (
          <option key={i} value={team.name}>
            {team.name}
          </option>
        );
      })}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps)(TeamOptions);
