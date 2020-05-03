import React, { useState } from "react";

import css from "./FileFilters.module.scss";

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

export default FileFilters;
