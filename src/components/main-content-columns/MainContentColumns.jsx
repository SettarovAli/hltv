import React from "react";

import ColumnContent from "../column-content/ColumnContent";
import ColumnLeft from "../column-left/ColumnLeft";
import ColumnRight from "../column-right/ColumnRight";
import ColumnRight2 from "../column-right-2/ColumnRight2";

import { GridContainer } from "./MainContentColumnsStyles";

const MainContentColumns = () => {
  return (
    <GridContainer>
      <ColumnContent />
      <ColumnLeft />
      <ColumnRight />
      <ColumnRight2 />
    </GridContainer>
  );
};

export default MainContentColumns;
