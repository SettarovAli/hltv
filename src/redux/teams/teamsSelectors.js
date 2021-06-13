import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectTeams = (state) => state.teams.teams;

export const selectTeamsObject = createSelector(
  [selectTeams],
  (teams) => teams
);

export const selectTeamsForPreview = createSelector([selectTeams], (teams) =>
  teams ? Object.values(teams) : []
);

export const selectIsTeamsLoaded = createSelector(
  [selectTeams],
  (teams) => !!teams
);

export const selectTeam = memoize((teamUrlParam) =>
  createSelector([selectTeams], (teams) => (teams ? teams[teamUrlParam] : null))
);
