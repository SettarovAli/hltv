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

export const deleteTeamStart = (teamId) => ({
  type: TeamsActionTypes.DELETE_TEAM_START,
  payload: teamId,
});

export const deleteTeamSuccess = () => ({
  type: TeamsActionTypes.DELETE_TEAM_SUCCESS,
});

export const deleteTeamFailure = (errorMessage) => ({
  type: TeamsActionTypes.DELETE_TEAM_FAILURE,
  payload: errorMessage,
});
