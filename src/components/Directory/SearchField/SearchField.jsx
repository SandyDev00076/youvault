import React from "react";

import css from "./SearchField.module.scss";

const SearchField = ({ placeholder }) => {
  function getSearchQuery(text) {
    console.log(text);
  }

  return (
    <div className={css.searchField}>
      <input
        className={css.searchInput}
        placeholder={placeholder}
        onChange={evt => getSearchQuery(evt.target.value)}
      />
    </div>
  );
};

export default SearchField;
