import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsTeamsLoaded } from "../../redux/teams/teamsSelectors";
import WithSpinner from "../with-spinner/WithSpinner";
import TeamsList from "./TeamsList";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsTeamsLoaded(state),
});

const TeamsListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(TeamsList);

export default TeamsListContainer;
