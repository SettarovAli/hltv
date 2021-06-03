import MatchesActionTypes from "./matchesTypes";

export const addMatch = (match) => ({
  type: MatchesActionTypes.ADD_MATCH,
  payload: match,
});

export const removeMatch = (match) => ({
  type: MatchesActionTypes.REMOVE_MATCH,
  payload: match,
});
