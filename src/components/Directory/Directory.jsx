import React from "react";

import useFolderDetails from "../../hooks/useFolderDetails";
import Link from "../atoms/Link";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Directory.module.scss";

const TopBar = ({ folderName, path, description }) => {
  const history = useHistory();
  return (
    <div className={css.topBar}>
      <div className={css.folderDetails}>
        <div className={css.path}>
          <button
            className={css.goUp}
            disabled={path.length === 0}
            onClick={() => {
              history.push(
                `/folders/${
                  path[path.length - 1].id !== "/"
                    ? path[path.length - 1].id
                    : ""
                }`
              );
            }}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
          {path.map((folder) => (
            <span key={folder.id} className={css.parents}>
              <Link to={`/folders/${folder.id !== "/" ? folder.id : ""}`}>
                {folder.name}
              </Link>{" "}
              /
            </span>
          ))}
          <span className={css.folderName}>{folderName}</span>
        </div>
        {description !== "--" && (
          <div className={css.folderDesc}>{description}</div>
        )}
      </div>
    </div>
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
        </section>
      )}
    </section>
  );
};

export default Directory;
