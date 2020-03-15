import React from "react";

import AppLogo from "../AppLogo";

import css from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className={css.header}>
      <AppLogo />
      <div className={css.navLinks}>
        {/* TODO: Add page links for each navLink */}
        <Link to="" className={css.navLink}>
          About Us
        </Link>
        <Link to="" className={css.navLink}>
          Policies
        </Link>
        <Link to="" className={css.navLink}>
          Support
        </Link>
      </div>
    </section>
  );
};

export default Header;
