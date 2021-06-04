import { createSelector } from "reselect";

const selectTeams = (state) => state.teams.teams;

export const selectTeamsForPreview = createSelector([selectTeams], (teams) =>
  teams ? Object.values(teams) : []
);

export const selectIsTeamsLoaded = createSelector(
  [selectTeams],
  (teams) => !!teams
);
