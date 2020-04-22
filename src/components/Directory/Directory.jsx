import React, { useState } from "react";

import useFolderDetails from "../../hooks/useFolderDetails";
import Link from "../atoms/Link";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "../File";
import TopBar from "./TopBar";
import EmptyState from "./EmptyState";

import css from "./Directory.module.scss";

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
            <h2 className={css.filesTitle}>
              <FontAwesomeIcon
                icon="photo-video"
                style={{ marginRight: "10px" }}
              />
              Files
              <FileFilters
                fileTypes={fileTypes}
                onFilterChange={(filter) => onFilterChange(filter)}
              />
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
