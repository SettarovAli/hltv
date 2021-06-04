import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import Flag from "../flag/Flag";
import { TeamItemContainer, TeamItemInner } from "./TeamItemStyles";
import { deleteTeamStart } from "../../redux/teams/teamsActions";
import toast from "react-hot-toast";

const DeleteTeam = ({ deleteTeamStart, id, name }) => {
  return (
    <div
      onClick={async () => {
        await deleteTeamStart(id);
        toast.error(`Team ${name} has been removed`);
      }}
    >
      <TouchIconComponent
        Icon={DeleteIcon}
        fontSize={"default"}
        color={"error"}
      />
    </div>
  );
};

const TeamItem = ({ team, deleteTeamStart }) => {
  const { name, country, id } = team;
  return (
    <TeamItemContainer>
      <TeamItemInner>
        <Flag code={country} />
        <span>{name}</span>
      </TeamItemInner>

      <Route
        path="/admin"
        render={() => {
          return (
            <DeleteTeam deleteTeamStart={deleteTeamStart} id={id} name={name} />
          );
        }}
      />
    </TeamItemContainer>
  );
};

export default connect(null, { deleteTeamStart })(TeamItem);
