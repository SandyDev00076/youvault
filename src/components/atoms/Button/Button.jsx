import React from "react";

import css from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  type = "secondary",
  icon = null,
  loading = false,
  children,
  small = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${css[type]} ${small && css.small} ${className}`}
      {...props}
    >
      {icon && !loading && (
        <FontAwesomeIcon icon={icon} className={css.btnIcon} />
      )}
      {loading && (
        <FontAwesomeIcon spin icon="circle-notch" className={css.btnIcon} />
      )}
      <span className={css.btnText}>{children}</span>
    </button>
  );
};

export default Button;
