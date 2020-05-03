import React, { useState } from "react";

import NewFolder from "../../Popups/NewFolder";
import NewFile from "../../Popups/NewFile";

import css from "./EmptyState.module.scss";

const EmptyState = () => {
  const [newFolderPopup, setNewFolderPopup] = useState(() => false);
  const [newFilePopup, setNewFilePopup] = useState(() => false);

  return (
    <div className={css.emptyUI}>
      <div className={css.line1}>Nothing Here!</div>
      <div className={css.line2}>
        {/* TODO: Open a modal for adding a file/folder here. */}
        Add{" "}
        <span className={css.add} onClick={() => setNewFilePopup(true)}>
          a file
        </span>{" "}
        or{" "}
        <span className={css.add} onClick={() => setNewFolderPopup(true)}>
          a folder
        </span>{" "}
        here.
      </div>
      {/* Popups */}
      {newFolderPopup && (
        <NewFolder handleClose={() => setNewFolderPopup(false)} />
      )}
      {newFilePopup && <NewFile handleClose={() => setNewFilePopup(false)} />}
    </div>
  );
};

export default EmptyState;
