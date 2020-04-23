import React from "react";

import css from "./Backdrop.module.scss";

const Backdrop = ({ onBackdropClick }) => {
  return <div className={css.backdrop} onClick={onBackdropClick}></div>;
};

export default Backdrop;
