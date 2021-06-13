import { takeLatest, call, put, all } from "redux-saga/effects";
// import firebase from "../../firebase/firebaseUtils";
import { firestore } from "../../firebase/firebaseUtils";
import keyBy from "lodash.keyby";

import { fetchMatchesSuccess, fetchMatchesFailure } from "./matchesActions";

import MatchesActionTypes from "./matchesTypes";

export const convertMatchesSnapshotToMap = (matchesSnapshot) => {
  return matchesSnapshot.docs.map((doc) => {
    const { team1, team2, date, id } = doc.data();
    const transformedDate = date.toDate();
    return {
      team1,
      team2,
      date: transformedDate,
      id,
    };
  });
};

export function* fetchMatchesStartAsync() {
  try {
    const matchesRef = firestore.collection("matches");
    const snapshot = yield matchesRef.get();
    const matches = yield call(convertMatchesSnapshotToMap, snapshot);
    const transform = yield keyBy(matches, "id");
    yield put(fetchMatchesSuccess(transform));
  } catch (error) {
    yield put(fetchMatchesFailure(error.message));
  }
}

export function* watchFetchMatchesStart() {
  yield takeLatest(
    MatchesActionTypes.FETCH_MATCHES_START,
    fetchMatchesStartAsync
  );
}

export function* matchesSagas() {
  yield all([call(watchFetchMatchesStart)]);
}
