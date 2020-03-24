import React from "react";
import { useState } from "react";
import useSearchQuery from "../../../hooks/useSearchQuery";

import css from "./SearchField.module.scss";

const SearchField = ({ placeholder }) => {
  const [queryString, setQueryString] = useState("");
  const { filteredItems } = useSearchQuery({ text: queryString });

  return (
    <div className={css.searchField}>
      <input
        className={css.searchInput}
        placeholder={placeholder}
        onChange={evt => setQueryString(evt.target.value)}
      />
      {filteredItems.length !== 0 && (
        <div className={css.searchDropdown}>
          {filteredItems.map(item => (
            <div key={item.id} className={css.searchDropdownItem}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
