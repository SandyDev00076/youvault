import React from "react";

import css from "./SimpleLayout.module.scss";

const SimpleLayout = ({ children, componentClass = "" }) => {
  return <div className={`${css.container} ${componentClass}`}>{children}</div>;
};

export default SimpleLayout;
