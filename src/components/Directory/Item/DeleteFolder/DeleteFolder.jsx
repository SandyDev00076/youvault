import React from "react";
import Modal from "../../../atoms/Modal";

import css from "./DeleteFolder.module.scss";

const DeleteFolder = ({ folderName, handleClose }) => {
  return (
    <Modal title="Delete Folder">
      Are you sure you want to delete the folder{" "}
      <span className={css.folderName}>{folderName}</span> and its content ?
    </Modal>
  );
};

export default DeleteFolder;
