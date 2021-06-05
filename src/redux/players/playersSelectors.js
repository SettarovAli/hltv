import { createSelector } from "reselect";

const selectPlayers = (state) => state.players.players;

export const selectPlayersForPreview = createSelector(
  [selectPlayers],
  (players) => (players ? Object.values(players) : [])
);

export const selectIsPlayersLoaded = createSelector(
  [selectPlayers],
  (players) => !!players
);
