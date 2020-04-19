import React, { useState } from "react";

import css from "./SearchField.module.scss";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={css.searchWrapper}>
      <input
        className={css.searchField}
        placeholder="Search for files / folders"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
      />
      {searchQuery && <div className={css.searchDropdown}></div>}
    </div>
  );
};

export default SearchField;
