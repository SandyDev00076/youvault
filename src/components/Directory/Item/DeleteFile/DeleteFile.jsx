import React from "react";

import Modal from "../../../atoms/Modal";
import Button from "../../../atoms/Button";

import css from "./DeleteFile.module.scss";

const DeleteFile = ({ handleClose, fileName = "file", fileType = "file" }) => {
  return (
    <Modal title="Delete File">
      Are you sure you want to delete the {fileType}{" "}
      <span className={css.fileName}>{fileName}</span> ?
      <div className="btnPanel">
        <Button type="primary" onClick={handleClose}>
          Yes
        </Button>
        <Button onClick={handleClose}>No</Button>
      </div>
    </Modal>
  );
};

export default DeleteFile;
