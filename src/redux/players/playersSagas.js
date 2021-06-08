import { takeLatest, call, put, all } from "redux-saga/effects";
import firebase from "../../firebase/firebaseUtils";
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
  fetchCurrentTeamSuccess,
  fetchCurrentTeamFailure,
} from "./playersActions";

import { fetchTeamsStart } from "../teams/teamsActions";

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
    yield firestore
      .collection("teams")
      .where(
        "squad",
        "array-contains",
        firestore.collection("players").doc(action.payload)
      )
      .get()
      .then((snap) => {
        snap.forEach((docu) => {
          docu.ref.update(
            "squad",
            firebase.firestore.FieldValue.arrayRemove(
              firestore.collection("players").doc(action.payload)
            )
          );
        });
      });
    yield put(deletePlayerSuccess());
    yield put(fetchPlayersStart());
    yield put(fetchTeamsStart());
  } catch (error) {
    yield put(deletePlayerFailure(error.message));
  }
}

export function* watchDeletePlayer() {
  yield takeLatest(PlayersActionTypes.DELETE_PLAYER_START, deletePlayer);
}

export function* fetchCurrentTeam(action) {
  try {
    let newItem;

    const playerDocRef = action.payload;

    yield playerDocRef
      .get()
      .then((doc) => {
        newItem = doc.data();
        newItem.team
          .get()
          .then((doc) => {
            newItem.teamData = doc.data();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
      });
    yield put(fetchCurrentTeamSuccess(newItem));
  } catch (error) {
    yield put(fetchCurrentTeamFailure(error.message));
  }
}

export function* watchFetchCurrentTeam() {
  yield takeLatest(
    PlayersActionTypes.FETCH_CURRENT_TEAM_START,
    fetchCurrentTeam
  );
}

export function* playersSagas() {
  yield all([
    call(watchFetchPlayersStart),
    call(watchDeletePlayer),
    call(watchFetchCurrentTeam),
  ]);
}
