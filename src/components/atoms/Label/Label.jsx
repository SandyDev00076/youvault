import React from "react";

import css from "./Label.module.scss";

const Label = ({ children, name = "" }) => {
  return (
    <label className={css.label}>
      <div className={css.labelName}>{name}</div>
      {children}
    </label>
  );
};

export default Label;
