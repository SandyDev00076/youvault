import React, { useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./ContextMenu.module.scss";
import Backdrop from "../Backdrop";

export const ContextMenuOption = ({ icon, option, onSelect }) => {
  return (
    <div className={css.contextMenuOption} onClick={onSelect}>
      <div className={css.optionIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={css.option}>{option}</div>
    </div>
  );
};

const ContextMenu = ({ children, x, y, handleClose, title = "" }) => {
  const menuPosition = useMemo(() => {
    return {
      top: y,
      left: x,
    };
  }, [x, y]);
  return (
    <>
      <Backdrop onBackdropClick={handleClose} />
      <div className={css.contextMenu} style={menuPosition}>
        {title && <div className={css.title}>{title}</div>}
        {children}
      </div>
    </>
  );
};

export default ContextMenu;
