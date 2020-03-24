import React from "react";
import { useState } from "react";
import useSearchQuery from "../../../hooks/useSearchQuery";

import css from "./SearchField.module.scss";

const SearchField = ({ placeholder }) => {
  const [queryString, setQueryString] = useState("");
  const { filteredItems } = useSearchQuery(queryString);

  function getSearchQuery(text) {
    setQueryString(text);
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
