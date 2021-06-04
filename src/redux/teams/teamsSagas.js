import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertTeamsSnapshotToMap,
} from "../../firebase/firebaseUtils";

import TeamsActionTypes from "./teamsTypes";

import {
  fetchTeamsStart,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  deleteTeamSuccess,
  deleteTeamFailure,
} from "./teamsActions";

export function* fetchTeamsStartAsync() {
  try {
    const collectionRef = firestore.collection("teams");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertTeamsSnapshotToMap, snapshot);
    yield put(fetchTeamsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchTeamsFailure(error.message));
  }
}

export function* watchFetchTeamsStart() {
  yield takeLatest(TeamsActionTypes.FETCH_TEAMS_START, fetchTeamsStartAsync);
}

export function* deleteTeam(action) {
  try {
    yield firestore.collection("teams").doc(action.payload).delete();
    yield put(deleteTeamSuccess());
    yield put(fetchTeamsStart());
  } catch (error) {
    yield put(deleteTeamFailure(error.message));
  }
}

export function* watchDeleteTeam() {
  yield takeLatest(TeamsActionTypes.DELETE_TEAM_START, deleteTeam);
}

export function* teamsSagas() {
  yield all([call(watchFetchTeamsStart), call(watchDeleteTeam)]);
}
