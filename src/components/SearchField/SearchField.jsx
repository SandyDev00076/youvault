import React, { useState } from "react";

import css from "./SearchField.module.scss";
import useSearchQuery from "../../hooks/useSearchQuery";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResult } = useSearchQuery({ query: searchQuery });
  console.log(searchResult);

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
