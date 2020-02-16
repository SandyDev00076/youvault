import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import css from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={css.pagecontent}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
