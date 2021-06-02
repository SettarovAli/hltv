import { createSelector } from "reselect";

const selectTeams = (state) => state.teams;

export const selectTeamsForPreview = createSelector([selectTeams], (teams) =>
  teams ? Object.values(teams) : []
);
