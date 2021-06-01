import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr) 145px 145px;
  grid-template-rows: 100%;
  grid-template-areas: "column-left column-content column-right column-right-2";
  grid-gap: 0 16px;
`;
