import React from "react";

import AppLogo from "../AppLogo/AppLogo";

import css from "./NavBar.module.scss";

const NavBar = () => {
  // Style classes
  const { navbar } = css;

  return (
    <nav className={navbar}>
      <AppLogo />
    </nav>
  );
};

export default NavBar;
