import React from "react";

import Link from "../atoms/Link";
import { useHistory } from "react-router-dom";
import ContextMenu, { ContextMenuOption } from "../ContextMenu";
import useContextMenu from "../../hooks/useContextMenu";

import css from "./Folder.module.scss";

const Folder = ({ folder }) => {
  const history = useHistory();
  const {
    xCoord,
    yCoord,
    showMenu,
    openContextMenu,
    closeContextMenu,
  } = useContextMenu();

  return (
    <>
      <Link
        to={`/folders/${folder.id}`}
        className={css.folder}
        onContextMenu={openContextMenu}
      >
        {folder.name}
      </Link>
      {/* Context Menu for Folders */}
      {showMenu && (
        <ContextMenu
          x={xCoord}
          y={yCoord}
          handleClose={closeContextMenu}
          title={folder.name}
        >
          <ContextMenuOption
            icon="folder-open"
            option="Open"
            onSelect={() => {
              history.push(`/folders/${folder.id}`);
            }}
          />
          <ContextMenuOption
            icon="cut"
            option="Move"
            onSelect={() => {
              // TODO: Add modal for moving the folder
              console.log("moving the folder");
            }}
          />
          <ContextMenuOption
            icon="trash"
            option="Delete"
            onSelect={() => {
              // TODO: Add logic for deleting a folder
              console.log("deleting the folder");
            }}
          />
        </ContextMenu>
      )}
    </>
  );
};

export default Folder;
