import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../context/appContext";
import yt from "youtube-thumbnail";
import { getDirectory } from "../../api/dirApi";

import css from "./Directory.module.scss";
import Item from "./Item";

/* Directory Component */
const Directory = () => {
  const [dirList, setDirList] = useState([]);

  useEffect(() => {
    getDirectory().then(data => setDirList(data));
  }, []);

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <div className={css.path}></div>
      </section>
      <section>
        <h2 className={css.sectionLabel}>
          Folders
          <FontAwesomeIcon icon="folder" className={css.sectionIcon} />
        </h2>
        <section className={css.folderSection}>
          {dirList
            .filter(item => item.type === "folder")
            .map(item => (
              <Item item={item} key={item.id} />
            ))}
        </section>
      </section>
      <section>
        <h2 className={css.sectionLabel}>
          Files
          <FontAwesomeIcon icon="folder" className={css.sectionIcon} />
        </h2>
        <section className={css.mediaSection}>
          {dirList
            .filter(item => item.type !== "folder")
            .map(item => (
              <Item item={item} key={item.id} />
            ))}
        </section>
      </section>
    </section>
  );
};

export default Directory;
