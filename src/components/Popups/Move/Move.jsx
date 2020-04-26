import React from "react";

import Modal, { ModalHeading } from "../../atoms/Modal/Modal";
import FolderField from "../../FolderField/FolderField";
import Label from "../../atoms/Label";

import css from "./Move.module.scss";

const MoveTo = ({ itemID, handleClose }) => {
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Move To
      </ModalHeading>
      <Label name="Where?">
        <FolderField />
      </Label>
    </Modal>
  );
};

export default MoveTo;
