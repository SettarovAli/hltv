import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsTeamsLoaded } from "../../redux/teams/teamsSelectors";
import WithSpinner from "../with-spinner/WithSpinner";
import ChooseTeam from "./ChooseTeam";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsTeamsLoaded(state),
});

const ChooseTeamContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ChooseTeam);

export default ChooseTeamContainer;
