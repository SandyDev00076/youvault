import React, { useState } from "react";

import Link from "../atoms/Link";
import { useHistory } from "react-router-dom";
import ContextMenu, { ContextMenuOption } from "../ContextMenu";
import useContextMenu from "../../hooks/useContextMenu";

import css from "./Folder.module.scss";
import MoveTo from "../Popups/Move";

const Folder = ({ folder }) => {
  const history = useHistory();
  const {
    xCoord,
    yCoord,
    showMenu,
    openContextMenu,
    closeContextMenu,
  } = useContextMenu();
  const [movePopup, openMovePopup] = useState(() => false);

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
              openMovePopup(true);
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
      {/* Popups */}
      {movePopup && <MoveTo handleClose={() => openMovePopup(false)} />}
    </>
  );
};

export default Folder;
