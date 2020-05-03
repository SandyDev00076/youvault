import React, { useState } from "react";

import Link from "../atoms/Link";
import { useHistory } from "react-router-dom";
import ContextMenu, { ContextMenuOption } from "../ContextMenu";
import useContextMenu from "../../hooks/useContextMenu";

import css from "./Folder.module.scss";
import MoveTo from "../Popups/Move";
import Delete from "../Popups/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [deletePopup, openDeletePopup] = useState(() => false);

  return (
    <>
      <Link
        to={`/folders/${folder.id}`}
        className={css.folder}
        onContextMenu={openContextMenu}
      >
        <FontAwesomeIcon icon="folder" className={css.folderIcon} />
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
              openDeletePopup(true);
            }}
          />
        </ContextMenu>
      )}
      {/* Popups */}
      {movePopup && (
        <MoveTo item={folder} handleClose={() => openMovePopup(false)} />
      )}
      {deletePopup && (
        <Delete item={folder} handleClose={() => openDeletePopup(false)} />
      )}
    </>
  );
};

export default Folder;
