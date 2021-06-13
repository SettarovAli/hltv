import { all, call } from "redux-saga/effects";

import { teamsSagas } from "./teams/teamsSagas";
import { playersSagas } from "./players/playersSagas";
import { matchesSagas } from "./matches/matchesSaga";

export default function* rootSaga() {
  yield all([call(teamsSagas), call(playersSagas), call(matchesSagas)]);
}
