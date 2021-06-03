import React from "react";
import { connect } from "react-redux";

import MatchItem from "../match-item/MatchItem";

const MatchesList = ({ matches }) => {
  return (
    <div>
      <h2 className="column-heading">Matches</h2>
      {matches.future.map((match, i) => {
        return <MatchItem key={i} match={match} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  matches: state.matches,
});

export default connect(mapStateToProps)(MatchesList);
