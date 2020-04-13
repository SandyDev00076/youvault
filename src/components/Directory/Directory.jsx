import React, { useState } from "react";

import css from "./Directory.module.scss";
import useFolderDetails from "../../hooks/useFolderDetails";

const TopBar = () => {
  return <div className={css.topBar}></div>;
};

const Directory = () => {
  const [currentFolder, setCurrentFolder] = useState("/");
  const { description, files, folders, path } = useFolderDetails(currentFolder);
  return <section className={css.directory}></section>;
};

export default Directory;
