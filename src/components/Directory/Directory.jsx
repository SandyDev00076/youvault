import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDirectory } from "../../api/dirApi";
import Item from "./Item";

import css from "./Directory.module.scss";

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
          <FontAwesomeIcon icon="photo-video" className={css.sectionIcon} />
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
