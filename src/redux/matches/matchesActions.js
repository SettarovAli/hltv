import MatchesActionTypes from "./matchesTypes";

export const addMatch = (match) => ({
  type: MatchesActionTypes.ADD_MATCH,
  payload: match,
});
