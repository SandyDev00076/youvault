import React from "react";
import ContentLoader from "react-content-loader";
import css from "./Directory.module.scss";

const FolderPlaceholder = () => {
  return (
    <ContentLoader width="320" height="120">
      <rect x="10" y="10" rx="4" ry="4" width="200" height="32" />
      <rect x="10" y="50" rx="4" ry="4" width="300" height="20" />
    </ContentLoader>
  );
};

const FilePlaceholder = () => {
  return (
    <ContentLoader width="320" height="280">
      <rect x="10" y="10" rx="4" ry="4" width="100" height="32" />
      <rect x="200" y="10" rx="4" ry="4" width="90" height="20" />
      <rect x="10" y="50" rx="4" ry="4" width="50" height="32" />
      <rect x="10" y="90" rx="4" ry="4" width="90" height="90" />
    </ContentLoader>
  );
};

export const FolderContentLoader = () => {
  return (
    <section className={css.folderSection}>
      <FolderPlaceholder />
      <FolderPlaceholder />
    </section>
  );
};

export const FilesContentLoader = () => {
  return (
    <section className={css.mediaSection}>
      <FilePlaceholder />
      <FilePlaceholder />
    </section>
  );
};
