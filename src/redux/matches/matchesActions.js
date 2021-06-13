import MatchesActionTypes from "./matchesTypes";

export const fetchMatchesStart = () => ({
  type: MatchesActionTypes.FETCH_MATCHES_START,
});

export const fetchMatchesSuccess = (matchesMap) => ({
  type: MatchesActionTypes.FETCH_MATCHES_SUCCESS,
  payload: matchesMap,
});

export const fetchMatchesFailure = (errorMessage) => ({
  type: MatchesActionTypes.FETCH_MATCHES_FAILURE,
  payload: errorMessage,
});

export const removeMatchStart = (match) => ({
  type: MatchesActionTypes.REMOVE_MATCH_START,
  payload: match,
});

export const removeMatchSuccess = () => ({
  type: MatchesActionTypes.REMOVE_MATCH_SUCCESS,
});

export const removeMatchFailure = (errorMessage) => ({
  type: MatchesActionTypes.REMOVE_MATCH_FAILURE,
  payload: errorMessage,
});
