import React from "react";

import css from "./Label.module.scss";

const Label = ({ children, title = "label" }) => {
  return (
    <label className={css.label}>
      <div className={css.labelTitle}>{title}</div>
      {children}
    </label>
  );
};

export default Label;
