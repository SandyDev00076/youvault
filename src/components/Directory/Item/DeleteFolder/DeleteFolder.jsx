import React from "react";
import Modal from "../../../atoms/Modal";

import css from "./DeleteFolder.module.scss";
import Button from "../../../atoms/Button";

const DeleteFolder = ({ folderName, handleClose }) => {
  return (
    <Modal title="Delete Folder">
      Are you sure you want to delete the folder{" "}
      <span className={css.folderName}>{folderName}</span> and its content ?
      <div className="btnpanel">
        <Button type="primary" onClick={handleClose}>
          Yes
        </Button>
        <Button onClick={handleClose}>No</Button>
      </div>
    </Modal>
  );
};

export default DeleteFolder;
