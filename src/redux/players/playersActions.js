import PlayersActionTypes from "./playersTypes";

export const fetchPlayersStart = () => ({
  type: PlayersActionTypes.FETCH_PLAYERS_START,
});

export const fetchPlayersSuccess = (playersMap) => ({
  type: PlayersActionTypes.FETCH_PLAYERS_SUCCESS,
  payload: playersMap,
});

export const fetchPlayersFailure = (errorMessage) => ({
  type: PlayersActionTypes.FETCH_PLAYERS_FAILURE,
  payload: errorMessage,
});

export const deletePlayerStart = (playerId) => ({
  type: PlayersActionTypes.DELETE_PLAYER_START,
  payload: playerId,
});

export const deletePlayerSuccess = () => ({
  type: PlayersActionTypes.DELETE_PLAYER_SUCCESS,
});

export const deletePlayerFailure = (errorMessage) => ({
  type: PlayersActionTypes.DELETE_PLAYER_FAILURE,
  payload: errorMessage,
});