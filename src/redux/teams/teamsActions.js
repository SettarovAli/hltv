import TeamsActionTypes from "./teamsTypes";

export const fetchTeamsStart = () => ({
  type: TeamsActionTypes.FETCH_TEAMS_START,
});

export const fetchTeamsSuccess = (teamsMap) => ({
  type: TeamsActionTypes.FETCH_TEAMS_SUCCESS,
  payload: teamsMap,
});

export const fetchTeamsFailure = (errorMessage) => ({
  type: TeamsActionTypes.FETCH_TEAMS_FAILURE,
  payload: errorMessage,
});
