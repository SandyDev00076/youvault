import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDirectory } from "../../api/dirApi";
import Item from "./Item";
import { useParams } from "react-router-dom";
import useFiles, { SUCCESS, PENDING } from "../../hooks/useFiles";
import {
  FolderContentLoader,
  FilesContentLoader
} from "./DirectoryPlaceholders";
import useFolderPath from "../../hooks/useFolderPath";
import { useEffect } from "react";
import FolderPath from "./FolderPath";

import css from "./Directory.module.scss";
import SearchField from "./SearchField/SearchField";
import AddItem from "./AddItem/AddItem";

/* Component to show in case Folder is empty */
const EmptyFolder = () => {
  return (
    <div className={css.emptyFolder}>
      <FontAwesomeIcon icon="exclamation-circle" className={css.emptyIcon} />
      <div>
        <div className={css.noItemsText}>No items found.</div>
        <div className={css.noItemsText1}>Try adding a file or a folder.</div>
      </div>
    </div>
  );
};

/* Directory Component */
const Directory = () => {
  const { id } = useParams();
  const { items, fetchState } = useFiles(getDirectory(id ?? "/"));
  const { fullPath } = useFolderPath(id ?? "/");

  useEffect(() => {
    // re render the component here
  }, [id]);

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <FolderPath fullPath={fullPath} />
        <SearchField placeholder="Search for files / folders" />
      </section>
      {items.length !== 0 || fetchState !== SUCCESS ? (
        <>
          {items.filter(item => item.type === "folder").length !== 0 && (
            <section>
              <h2 className={css.sectionLabel}>
                Folders
                <FontAwesomeIcon icon="folder" className={css.sectionIcon} />
              </h2>
              {fetchState === PENDING && <FolderContentLoader />}
              {fetchState === SUCCESS && (
                <section className={css.folderSection}>
                  {items
                    .filter(item => item.type === "folder")
                    .map(item => (
                      <Item item={item} key={item.id} />
                    ))}
                </section>
              )}
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
              {fetchState === PENDING && <FilesContentLoader />}
              {fetchState === SUCCESS && (
                <section className={css.mediaSection}>
                  {items
                    .filter(item => item.type !== "folder")
                    .map(item => (
                      <Item item={item} key={item.id} />
                    ))}
                </section>
              )}
            </section>
          )}
        </>
      ) : (
        <EmptyFolder />
      )}
      {/* Button to add a file or folder */}
      <AddItem />
    </section>
  );
};

export default Directory;
