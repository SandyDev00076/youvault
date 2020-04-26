import React from "react";

import Modal, { ModalHeading } from "../../atoms/Modal/Modal";
import FolderField from "../../FolderField/FolderField";
import Label from "../../atoms/Label";

import css from "./Move.module.scss";

const MoveTo = ({ item, handleClose }) => {
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Move To
      </ModalHeading>
      <Label name="Where?">
        {/* TODO: What to do when a folder is selected */}
        <FolderField onFolderSelect={(folder) => console.log(folder.name)} />
      </Label>
    </Modal>
  );
};

export default MoveTo;
