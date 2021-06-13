import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMatchesForPreview } from "../../redux/matches/matchesSelectors";

import MatchItem from "../match-item/MatchItem";
import { MatchItemContainer } from "../match-item/MatchItemStyles";

const MatchesList = ({ matches }) => {
  return (
    <div>
      <h2 className="column-heading">Matches</h2>
      {matches.length ? (
        matches.map((match, i) => {
          return <MatchItem key={i} match={match} />;
        })
      ) : (
        <MatchItemContainer>There are no matches</MatchItemContainer>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  matches: selectMatchesForPreview,
});

export default connect(mapStateToProps)(MatchesList);
