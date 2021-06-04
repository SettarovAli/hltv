import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsTeamsLoaded } from "../../redux/teams/teamsSelectors";
import WithSpinner from "../with-spinner/WithSpinner";
import AddMatch from "./AddMatch";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsTeamsLoaded(state),
});

const AddMatchContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AddMatch);

export default AddMatchContainer;
