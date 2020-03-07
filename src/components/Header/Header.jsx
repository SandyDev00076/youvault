import React from "react";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <section className={css.header}>
      <section className={css.appIntro}>
        <div className={css.appName}>Almanac</div>
        <div className={css.appDesc}>Your own directory for Youtube videos</div>
      </section>
      <section className={css.userInfo}>
        <div className={css.userIntro}>
          <div className={css.hello}>Hello</div>
          <div className={css.userName}>Sanjeet Tiwari</div>
          <div className={css.gateway} tabIndex={0}>
            Logout
          </div>
        </div>
        <img
          className={css.userImage}
          src="https://dummyimage.com/600x400/000/fff&text=X"
          alt=""
        />
      </section>
    </section>
  );
};

export default Header;
