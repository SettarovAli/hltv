import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  grid-template-areas: "matches matches-right" "teams teams-right" "players players-right";
  grid-gap: 16px;
`;
