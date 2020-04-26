import React from "react";

import Modal, { ModalHeading } from "../../atoms/Modal/Modal";
import css from "./Delete.module.scss";

const Delete = ({ item, handleClose }) => {
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Delete
      </ModalHeading>
    </Modal>
  );
};

export default Delete;
