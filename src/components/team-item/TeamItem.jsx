import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import Flag from "../flag/Flag";
import { TeamItemContainer, TeamItemInner } from "./TeamItemStyles";

const TeamItem = ({ team }) => {
  const { name, country } = team;
  return (
    <TeamItemContainer>
      <TeamItemInner>
        <Flag code={country} />
        <span>{name}</span>
      </TeamItemInner>
    </TeamItemContainer>
  );
};

export default connect(null)(TeamItem);
