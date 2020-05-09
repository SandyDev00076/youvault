import React from "react";

import Header from "../../components/Header";
import css from "./HeaderLayout.module.scss";

const HeaderLayout = ({ children, componentClass = "" }) => {
  return (
    <div className={css.container}>
      <Header />
      <section className={`${css.comp} ${componentClass}`}>{children}</section>
    </div>
  );
};

export default HeaderLayout;
