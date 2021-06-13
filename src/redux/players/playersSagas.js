import { takeLatest, call, put, all } from "redux-saga/effects";
import firebase from "../../firebase/firebaseUtils";
import { firestore } from "../../firebase/firebaseUtils";

import keyBy from "lodash.keyby";

import PlayersActionTypes from "./playersTypes";

import {
  fetchPlayersStart,
  fetchPlayersSuccess,
  fetchPlayersFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  deletePlayerFromOtherTeamSuccess,
  deletePlayerFromOtherTeamFailure,
} from "./playersActions";

import { fetchTeamsStart } from "../teams/teamsActions";

export const convertPlayersSnapshotToMap = (playersSnapshot) => {
  return playersSnapshot.docs.map((doc) => {
    const { nickName, fullName, country, id, logoLink, team } = doc.data();
    const currentTeam = team.id;
    return {
      nickName,
      fullName,
      country,
      id,
      logoLink,
      team,
      currentTeam,
    };
  });
};

export function* fetchPlayersStartAsync() {
  try {
    const playersRef = firestore.collection("players");
    const snapshot = yield playersRef.get();
    const players = yield call(convertPlayersSnapshotToMap, snapshot);
    const transform = yield keyBy(players, "id");
    yield put(fetchPlayersSuccess(transform));
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

export function* deletePlayerFromOtherTeam(action) {
  try {
    yield firestore
      .collection("teams")
      .where("id", "!=", action.payload.team)
      .get()
      .then((snap) => {
        snap.forEach((docu) => {
          docu.ref.update(
            "squad",
            firebase.firestore.FieldValue.arrayRemove(
              firestore.collection("players").doc(action.payload.player)
            )
          );
        });
      });
    yield put(deletePlayerFromOtherTeamSuccess());
  } catch (error) {
    yield put(deletePlayerFromOtherTeamFailure(error.message));
  }
}

export function* watchdeletePlayerFromOtherTeam() {
  yield takeLatest(
    PlayersActionTypes.DELETE_PLAYER_FROM_OTHER_TEAM_START,
    deletePlayerFromOtherTeam
  );
}

export function* playersSagas() {
  yield all([
    call(watchFetchPlayersStart),
    call(watchDeletePlayer),
    call(watchdeletePlayerFromOtherTeam),
  ]);
}
