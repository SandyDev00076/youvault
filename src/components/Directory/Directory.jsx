import React, { useState } from "react";

import css from "./Directory.module.scss";
import useFolderDetails from "../../hooks/useFolderDetails";

const TopBar = ({ path, description, folderCount, fileCount }) => {
  return <div className={css.topBar}></div>;
};

const Directory = () => {
  const [currentFolder, setCurrentFolder] = useState("/");
  const { folderName, description, files, folders, path } = useFolderDetails(
    currentFolder
  );
  console.log(folderName);
  return (
    <section className={css.directory}>
      <TopBar
        folderName={folderName}
        path={path}
        description={description}
        folderCount={folders ? folders.length : 0}
        fileCount={files ? files.length : 0}
      />
    </section>
  );
};

export default Directory;
