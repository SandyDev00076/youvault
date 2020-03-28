import React from "react";

import Portal from "./Portal/Portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Modal.module.scss";

const Modal = ({ children, title, closeBtn = false, onClose }) => {
  return (
    <Portal>
      <div className={css.modalWrapper}>
        <div className={css.modal}>
          <div className={css.modalHeader}>
            <h1 className={css.modalHeading}>{title}</h1>
            {closeBtn && (
              <button className={css.modalCloseBtn} onClick={onClose}>
                <FontAwesomeIcon icon="times" />
              </button>
            )}
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
