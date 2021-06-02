import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 145px;
  grid-template-rows: 100%;
  grid-template-areas: "column-content column-right";
  grid-gap: 0 16px;
`;
