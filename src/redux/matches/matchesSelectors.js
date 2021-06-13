import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectMatches = (state) => state.matches.matches;

export const selectFutureMatches = createSelector(
  [selectMatches],
  (matches) => matches.future
);

export const selectMatchesForPreview = createSelector(
  [selectFutureMatches],
  (matches) => (matches ? Object.values(matches) : [])
);

export const selectMatch = memoize((matchUrlParam) =>
  createSelector([selectFutureMatches], (matches) =>
    matches ? matches[matchUrlParam] : null
  )
);
