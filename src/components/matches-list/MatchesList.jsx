import React from "react";
import { connect } from "react-redux";

import MatchItem from "../match-item/MatchItem";
import { MatchItemContainer } from "../match-item/MatchItemStyles";

const MatchesList = ({ matches }) => {
  return (
    <div>
      <h2 className="column-heading">Matches</h2>
      {matches.future.length ? (
        matches.future.map((match, i) => {
          return <MatchItem key={i} match={match} />;
        })
      ) : (
        <MatchItemContainer>There are no matches</MatchItemContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  matches: state.matches,
});

export default connect(mapStateToProps)(MatchesList);
