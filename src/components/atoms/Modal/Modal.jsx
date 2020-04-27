import React from "react";

import css from "./Modal.module.scss";
import Portal from "../Portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalHeading = ({ children, showClose = false, onClose }) => {
  return (
    <div className={css.modalHeading}>
      <h1 className={css.modalHeadingText}>{children}</h1>
      {showClose && (
        <button className={css.closeBtn} onClick={onClose}>
          <FontAwesomeIcon icon="times" />
        </button>
      )}
    </div>
  );
};

export const ModalButtons = ({ children }) => {
  return <div className={css.modalButtons}>{children}</div>;
};

const Modal = ({ children }) => {
  return (
    <Portal>
      <div className={css.modalWrapper}>
        <div className={css.modal}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
