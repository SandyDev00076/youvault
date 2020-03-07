import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Directory.module.scss";

const SearchField = () => {
  return (
    <div className={css.SearchField}>
      <input
        className={css.searchInput}
        placeholder="Search for any video / folder"
      />
    </div>
  );
};

const BackButton = () => {
  return (
    <button className={css.backbutton}>
      <FontAwesomeIcon icon="arrow-left" />
    </button>
  );
};

const Directory = () => {
  return (
    <section className={css.directory}>
      <div className={css.dirNav}>
        <div className={css.dirPath}>
          <BackButton />
          Home
        </div>
        <SearchField />
      </div>
    </section>
  );
};

export default Directory;
