import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 200px;
  grid-template-areas: "column-content column-right";
  grid-gap: 16px;
`;
