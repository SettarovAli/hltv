import { takeLatest, call, put, all } from "redux-saga/effects";
import { firestore, addPlayerToSquad } from "../../firebase/firebaseUtils";
import keyBy from "lodash.keyby";

import TeamsActionTypes from "./teamsTypes";

import {
  fetchTeamsStart,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  deleteTeamSuccess,
  deleteTeamFailure,
  chooseTeamSuccess,
  chooseTeamFailure,
} from "./teamsActions";

import {
  fetchPlayersStart,
  fetchCurrentTeamStart,
} from "../players/playersActions";

export const convertTeamsSnapshotToMap = function* (teamsRef) {
  const teams = yield teamsRef
    .get()
    .then((teamsSnap) => {
      return teamsSnap.docs.map((doc) => {
        const { name, country, id, logoLink, squad } = doc.data();

        const players = squad.map((player) => player.id);

        return {
          name,
          country,
          id,
          logoLink,
          squad,
          players,
        };
      });
    })
    .catch((error) => {
      console.log("Error getting teams: ", error);
    });
  const transform = keyBy(teams, "id");
  yield put(fetchTeamsSuccess(transform));
};

export function* fetchTeamsStartAsync() {
  try {
    const teamsRef = firestore.collection("teams");
    yield call(convertTeamsSnapshotToMap, teamsRef);
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

export function* chooseTeam(action) {
  try {
    const teamDocRef = firestore
      .collection("teams")
      .doc(`${action.payload.team.id}`);

    const teamSnapshot = yield teamDocRef.get();

    const playerDocRef = firestore
      .collection("players")
      .doc(`${action.payload.player.id}`);

    const newSquad = yield call(addPlayerToSquad, teamSnapshot, playerDocRef);

    yield teamDocRef.update({
      squad: newSquad,
    });

    yield playerDocRef.update({
      team: teamDocRef,
    });

    yield put(chooseTeamSuccess());
    yield put(fetchTeamsStart());
    yield put(fetchPlayersStart());
    yield put(fetchCurrentTeamStart(playerDocRef));
  } catch (error) {
    yield put(chooseTeamFailure(error.message));
  }
}

export function* watchChooseTeam() {
  yield takeLatest(TeamsActionTypes.CHOOSE_TEAM_START, chooseTeam);
}

export function* teamsSagas() {
  yield all([
    call(watchFetchTeamsStart),
    call(watchDeleteTeam),
    call(watchChooseTeam),
  ]);
}
