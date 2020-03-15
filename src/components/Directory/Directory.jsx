import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../context/appContext";
import yt from "youtube-thumbnail";

import css from "./Directory.module.scss";

/* Directory Component */
const Directory = () => {
  const { dir } = useContext(AppContext);

  return <section className={css.directory}></section>;
};

export default Directory;
