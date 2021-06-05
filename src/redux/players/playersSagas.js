import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertPlayersSnapshotToMap,
} from "../../firebase/firebaseUtils";

import PlayersActionTypes from "./playersTypes";

import {
  fetchPlayersStart,
  fetchPlayersSuccess,
  fetchPlayersFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
} from "./playersActions";

export function* fetchPlayersStartAsync() {
  try {
    const collectionRef = firestore.collection("players");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertPlayersSnapshotToMap, snapshot);
    yield put(fetchPlayersSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchPlayersFailure(error.message));
  }
}

export function* watchFetchPlayersStart() {
  yield takeLatest(
    PlayersActionTypes.FETCH_PLAYERS_START,
    fetchPlayersStartAsync
  );
}

export function* deletePlayer(action) {
  try {
    yield firestore.collection("players").doc(action.payload).delete();
    yield put(deletePlayerSuccess());
    yield put(fetchPlayersStart());
  } catch (error) {
    yield put(deletePlayerFailure(error.message));
  }
}

export function* watchDeletePlayer() {
  yield takeLatest(PlayersActionTypes.DELETE_PLAYER_START, deletePlayer);
}

export function* playersSagas() {
  yield all([call(watchFetchPlayersStart), call(watchDeletePlayer)]);
}
