import React from "react";

import css from "./Button.module.scss";

const classMapping = {
  primary: "btn_primary",
  secondary: "btn_secondary"
};

const Button = ({
  type = "secondary",
  children,
  loading = false,
  ...props
}) => {
  return (
    <button {...props} className={css[classMapping[type]]}>
      {children}
    </button>
  );
};

export default Button;
