import { all, call } from "redux-saga/effects";

import { teamsSagas } from "./teams/teamsSagas";

export default function* rootSaga() {
  yield all([call(teamsSagas)]);
}
