import React from "react";

import styled from "styled-components";

const ColumnArea = styled.div`
  grid-area: ${(props) => props.area};
`;

const Column = ({ children, area }) => {
  return <ColumnArea area={area}>{children}</ColumnArea>;
};

export default Column;
