import React from "react";

import Modal, { ModalHeading } from "../../atoms/Modal/Modal";
import css from "./Move.module.scss";

const MoveTo = ({ itemID, handleClose }) => {
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Move To
      </ModalHeading>
    </Modal>
  );
};

export default MoveTo;
