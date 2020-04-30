import React, { useState } from "react";

import useFolderDetails from "../../hooks/useFolderDetails";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "../File";
import TopBar from "./TopBar";
import EmptyState from "./EmptyState";
import Folder from "../Folder";
import NewFolder from "../Popups/NewFolder";

import css from "./Directory.module.scss";
import Alert from "../Alert";

/* Filters files based on type */
const FileFilters = ({ fileTypes = [], onFilterChange }) => {
  const [selectedType, selectType] = useState("");

  function setFilter(filter) {
    selectType(filter);
    onFilterChange(filter);
  }

  return (
    <div className={css.fileFilters}>
      {fileTypes.map((filter) => (
        <div
          key={filter}
          className={`${css.fileFilter} ${
            filter === selectedType && css.filterSelected
          }`}
          onClick={() => setFilter(filter)}
        >
          {filter.length !== 0 ? filter : "All"}
        </div>
      ))}
    </div>
  );
};

/* Content component for Directory */
const Content = ({ files, folders, fileTypes, onFilterChange }) => {
  const [newFolderPopup, setNewFolderPopup] = useState(() => false);

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
            <button
              className={css.addFolder}
              onClick={() => setNewFolderPopup(true)}
            >
              <FontAwesomeIcon icon="plus" style={{ marginRight: "5px" }} />
              Add
            </button>
          </div>
          <div className={css.folders}>
            {folders.map((folder) => (
              <Folder folder={folder} key={folder.id} />
            ))}
          </div>
        </section>
      )}
      {/* Files section */}
      {files.length !== 0 && (
        <section className={css.fileSection}>
          <div className={css.sectionHeader}>
            <h2 className={css.filesTitle}>
              <FontAwesomeIcon
                icon="photo-video"
                style={{ marginRight: "10px" }}
              />
              Files
              {fileTypes.length > 1 && (
                <FileFilters
                  fileTypes={fileTypes}
                  onFilterChange={(filter) => onFilterChange(filter)}
                />
              )}
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
      {/* Popups */}
      {newFolderPopup && (
        <NewFolder handleClose={() => setNewFolderPopup(false)} />
      )}
    </>
  );
};

/* Directory component */
const Directory = () => {
  const { id } = useParams();
  const [fileFilter, setFileFilter] = useState("");
  const {
    folderName,
    description,
    files,
    folders,
    path = [],
    fileTypes,
  } = useFolderDetails(id ?? "/", { fileType: fileFilter });
  return (
    <section className={css.directory}>
      <TopBar folderName={folderName} path={path} description={description} />
      <Content
        files={files}
        folders={folders}
        fileTypes={fileTypes}
        onFilterChange={(filter) => setFileFilter(filter)}
      />
    </section>
  );
};

export default Directory;
