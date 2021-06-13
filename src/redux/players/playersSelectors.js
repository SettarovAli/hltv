import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectPlayers = (state) => state.players.players;

export const selectPlayersObject = createSelector(
  [selectPlayers],
  (players) => players
);

export const selectPlayersForPreview = createSelector(
  [selectPlayers],
  (players) => (players ? Object.values(players) : [])
);

export const selectIsPlayersLoaded = createSelector(
  [selectPlayers],
  (players) => !!players
);

export const selectPlayer = memoize((playerUrlParam) =>
  createSelector([selectPlayers], (players) =>
    players ? players[playerUrlParam] : null
  )
);
