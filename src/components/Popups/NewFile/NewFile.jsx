import React from "react";

import Modal, { ModalHeading } from "../../atoms/Modal";

import css from "./NewFile.module.scss";

const NewFile = ({ handleClose }) => {
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Add File
      </ModalHeading>
    </Modal>
  );
};

export default NewFile;
