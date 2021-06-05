import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import TouchIconComponent from "../touch-icon-component/TouchIconComponent";
import DeleteIcon from "@material-ui/icons/Delete";

import Flag from "../flag/Flag";
import {
  PlayerItemContainer,
  PlayerItemInner,
  AvatarImage,
} from "./PlayerItemStyles";
import { deletePlayerStart } from "../../redux/players/playersActions";
import toast from "react-hot-toast";

const DeletePlayer = ({ deletePlayerStart, id, name }) => {
  return (
    <div
      onClick={async () => {
        await deletePlayerStart(id);
        toast.error(`Player ${name} has been removed`);
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

const PlayerItem = ({ player, deletePlayerStart }) => {
  const { name, country, id, logoLink } = player;
  return (
    <PlayerItemContainer>
      <PlayerItemInner>
        <Flag code={country} />
        <AvatarImage src={logoLink} alt="Avatar" />
        <span>{name}</span>
      </PlayerItemInner>

      <Route
        path="/admin"
        render={() => {
          return (
            <DeletePlayer
              deletePlayerStart={deletePlayerStart}
              id={id}
              name={name}
            />
          );
        }}
      />
    </PlayerItemContainer>
  );
};

export default connect(null, { deletePlayerStart })(PlayerItem);
