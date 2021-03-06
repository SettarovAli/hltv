import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  grid-template-areas: "matches matches-right" "teams teams-right" "players players-right" "choose-team choose-team-right";
  grid-gap: 16px;
`;
