import React, { useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../Backdrop";

import css from "./ContextMenu.module.scss";

export const ContextMenuOption = ({ icon, option, onSelect, handleClose }) => {
  return (
    <div
      className={css.contextMenuOption}
      onClick={() => {
        onSelect();
        handleClose();
      }}
    >
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
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { handleClose }, null)
        )}
      </div>
    </>
  );
};

export default ContextMenu;
