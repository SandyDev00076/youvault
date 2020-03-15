import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./AppLogo.module.scss";

const AppLogo = () => {
  return (
    <div className={css.appLogo}>
      <div className={css.logoIcon}>
        <FontAwesomeIcon icon="folder" />
      </div>
      <h1 className={css.appName}>Almanac</h1>
    </div>
  );
};

export default AppLogo;
