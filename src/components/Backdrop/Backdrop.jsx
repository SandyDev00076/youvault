import React from "react";

import css from "./Backdrop.module.scss";

const Backdrop = ({ onBackdropClick }) => {
  return (
    <div
      className={css.backdrop}
      onClick={onBackdropClick}
      onContextMenu={onBackdropClick}
    ></div>
  );
};

export default Backdrop;
