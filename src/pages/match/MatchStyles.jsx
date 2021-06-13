import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr) 200px;
  grid-template-areas: "column-left column-content column-right";
  grid-gap: 0 16px;
`;
