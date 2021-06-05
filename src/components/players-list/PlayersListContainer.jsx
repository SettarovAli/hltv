import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsPlayersLoaded } from "../../redux/players/playersSelectors";
import WithSpinner from "../with-spinner/WithSpinner";
import PlayersList from "./PlayersList";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsPlayersLoaded(state),
});

const PlayersListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PlayersList);

export default PlayersListContainer;
