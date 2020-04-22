import React from "react";

import useFolderDetails from "../../hooks/useFolderDetails";
import Link from "../atoms/Link";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "../File";
import TopBar from "./TopBar";
import EmptyState from "./EmptyState";

import css from "./Directory.module.scss";

const Content = ({ files, folders }) => {
  if (files.length === 0 && folders.length === 0) return <EmptyState />;

  return (
    <>
      {/* Folder section */}
      {folders.length !== 0 && (
        <section className={css.folderSection}>
          <div className={css.sectionHeader}>
            <h2>
              <FontAwesomeIcon icon="folder" style={{ marginRight: "10px" }} />
              Folders
            </h2>
            <button className={css.addFolder}>
              <FontAwesomeIcon icon="plus" style={{ marginRight: "5px" }} />
              Add
            </button>
          </div>
          <div className={css.folders}>
            {folders.map((folder) => (
              <Link
                to={`/folders/${folder.id}`}
                key={folder.id}
                className={css.folder}
              >
                {folder.name}
              </Link>
            ))}
          </div>
        </section>
      )}
      {/* Files section */}
      {files.length !== 0 && (
        <section className={css.fileSection}>
          <div className={css.sectionHeader}>
            <h2>
              <FontAwesomeIcon
                icon="photo-video"
                style={{ marginRight: "10px" }}
              />
              Files
            </h2>
            <button className={css.addFile}>
              <FontAwesomeIcon icon="plus" style={{ marginRight: "5px" }} />
              Add
            </button>
          </div>
          <div className={css.files}>
            {files.map((file) => (
              <File file={file} key={file.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

const Directory = () => {
  const { id } = useParams();
  const {
    folderName,
    description,
    files,
    folders,
    path = [],
  } = useFolderDetails(id ?? "/");
  return (
    <section className={css.directory}>
      <TopBar folderName={folderName} path={path} description={description} />
      <Content files={files} folders={folders} />
    </section>
  );
};

export default Directory;
