import React from "react";

import css from "./Label.module.scss";

const Label = ({ children, title = "label" }) => {
  return (
    <label className={css.label}>
      <div className={css.labelTitle}>{title}</div>
      <div className={css.labelContent}>{children}</div>
    </label>
  );
};

export default Label;
