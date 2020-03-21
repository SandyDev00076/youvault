import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDirectory } from "../../api/dirApi";
import Item from "./Item";
import { useParams, Link } from "react-router-dom";
import useFiles, { SUCCESS, PENDING } from "../../hooks/useFiles";
import {
  FolderContentLoader,
  FilesContentLoader
} from "./DirectoryPlaceholders";

import css from "./Directory.module.scss";
import useFolderPath from "../../hooks/useFolderPath";

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

  /* Component for Folder path */
  const FolderPath = () => (
    <div className={css.path}>
      {fullPath.length !== 0 && (
        <>
          {fullPath.map((path, index) => (
            <span key={path.id}>
              {index !== fullPath.length - 1 ? (
                <span>
                  <Link
                    to={path.id !== "/" ? `/folders/${path.id}` : "/folders"}
                  >
                    {path.name}
                  </Link>
                  /
                </span>
              ) : (
                <span>{path.name}</span>
              )}
            </span>
          ))}
        </>
      )}
    </div>
  );

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <FolderPath />
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
    </section>
  );
};

export default Directory;
