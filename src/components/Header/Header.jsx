import React from "react";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <section className={css.header}>
      <section className={css.appIntro}>
        <div className={css.appName}>Almanac</div>
        <div className={css.appDesc}>Your own directory for Youtube videos</div>
      </section>
    </section>
  );
};

export default Header;
