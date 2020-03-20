import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDirectory } from "../../api/dirApi";
import Item from "./Item";
import { useParams } from "react-router-dom";

import css from "./Directory.module.scss";
import useFiles from "../../hooks/useFiles";

/* Directory Component */
const Directory = () => {
  const { id } = useParams();
  const { items, fetchState } = useFiles(getDirectory(id ?? "/"));

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <div className={css.path}></div>
      </section>
      {items.length !== 0 ? (
        <>
          {items.filter(item => item.type === "folder").length !== 0 && (
            <section>
              <h2 className={css.sectionLabel}>
                Folders
                <FontAwesomeIcon icon="folder" className={css.sectionIcon} />
              </h2>
              <section className={css.folderSection}>
                {items
                  .filter(item => item.type === "folder")
                  .map(item => (
                    <Item item={item} key={item.id} />
                  ))}
              </section>
            </section>
          )}
          {items.filter(item => item.type !== "folder").length !== 0 && (
            <section>
              <h2 className={css.sectionLabel}>
                Files
                <FontAwesomeIcon
                  icon="photo-video"
                  className={css.sectionIcon}
                />
              </h2>
              <section className={css.mediaSection}>
                {items
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
