import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDirectory } from "../../api/dirApi";
import Item from "./Item";
import { useParams } from "react-router-dom";

import css from "./Directory.module.scss";

/* Directory Component */
const Directory = () => {
  const [dirList, setDirList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) getDirectory(id).then(data => setDirList(data));
    else getDirectory("/").then(data => setDirList(data));
  }, [id]);

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <div className={css.path}></div>
      </section>
      {dirList.length !== 0 ? (
        <>
          {dirList.filter(item => item.type === "folder").length !== 0 && (
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
          )}
          {dirList.filter(item => item.type !== "folder").length !== 0 && (
            <section>
              <h2 className={css.sectionLabel}>
                Files
                <FontAwesomeIcon
                  icon="photo-video"
                  className={css.sectionIcon}
                />
              </h2>
              <section className={css.mediaSection}>
                {dirList
                  .filter(item => item.type !== "folder")
                  .map(item => (
                    <Item item={item} key={item.id} />
                  ))}
              </section>
            </section>
          )}
        </>
      ) : (
        <div className={css.emptyFolder}>
          <FontAwesomeIcon
            icon="exclamation-circle"
            className={css.emptyIcon}
          />
          <div>
            <div className={css.noItemsText}>No items found.</div>
            <div className={css.noItemsText1}>
              Try adding a file or a folder.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Directory;
