import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import Flag from "../flag/Flag";
import {
  TeamItemContainer,
  TeamItemLink,
  LogoImage,
  TeamName,
} from "./TeamItemStyles";
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
  if (!team) return null;
  const { name, country, id, logoLink } = team;
  return (
    <TeamItemContainer>
      <TeamItemLink to={`/teams/${team.id}`}>
        <Flag code={country} />
        <LogoImage src={logoLink} alt="Logo" />
        <TeamName>{name}</TeamName>
      </TeamItemLink>

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
