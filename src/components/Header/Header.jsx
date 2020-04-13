import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Header.module.scss";

export const AppLogo = () => {
  return (
    <div className={css.appLogo}>
      <div className={css.icon}>
        <FontAwesomeIcon icon="folder" />
      </div>
      <div className={css.appName}>Almanac</div>
    </div>
  );
};

const Header = () => {
  return (
    <nav className={css.header}>
      <AppLogo />
    </nav>
  );
};

export default Header;
