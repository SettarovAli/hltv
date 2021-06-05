import { all, call } from "redux-saga/effects";

import { teamsSagas } from "./teams/teamsSagas";
import { playersSagas } from "./players/playersSagas";

export default function* rootSaga() {
  yield all([call(teamsSagas), call(playersSagas)]);
}
