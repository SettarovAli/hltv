import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr) 145px;
  grid-template-areas: "column-left column-content column-right-2";
  grid-gap: 0 16px;
`;
