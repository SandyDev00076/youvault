import React, { useState } from "react";

import useFolderDetails from "../../hooks/useFolderDetails";
import css from "./Directory.module.scss";

const TopBar = ({ folderName, path, description, folderCount, fileCount }) => {
  return (
    <div className={css.topBar}>
      <div className={css.folderDetails}>
        <div className={css.path}>
          {path.map((folder) => (
            <span key={folder.id} className={css.parents}>
              <span>{folder.name}</span> /
            </span>
          ))}
          <span className={css.folderName}>{folderName}</span>
        </div>
      </div>
    </div>
  );
};

const Directory = () => {
  const [currentFolder, setCurrentFolder] = useState("almanac-6");
  const {
    folderName,
    description,
    files,
    folders,
    path = [],
  } = useFolderDetails(currentFolder);
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
